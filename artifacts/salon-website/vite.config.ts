import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { createLogger, defineConfig } from 'vite';

// Suppress the "Error when using sourcemap" lines that Radix UI triggers during
// Vite's transform phase. These are logged via Vite's own logger (not Rollup's
// onwarn), so they must be filtered here. Vercel's log scanner counts any line
// containing "Error" as a build failure even when the build itself succeeds.
const logger = createLogger();
const _warn = logger.warn.bind(logger);
logger.warn = (msg, opts) => {
  if (msg.includes('sourcemap') || msg.includes("Can't resolve original location")) return;
  _warn(msg, opts);
};
const _error = logger.error.bind(logger);
logger.error = (msg, opts) => {
  if (msg.includes('sourcemap') || msg.includes("Can't resolve original location")) return;
  _error(msg, opts);
};

// PORT is only needed for the dev/preview server, not during `vite build`.
// Vercel/Netlify don't set PORT, so we fall back to a safe default.
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;

// BASE_PATH defaults to '/' for standard deployments (Vercel, Netlify, etc.).
// Replit sets it to the artifact's sub-path (e.g. '/salon-website').
const basePath = process.env.BASE_PATH || '/';

const isReplit =
  process.env.NODE_ENV !== 'production' &&
  process.env.REPL_ID !== undefined;

// Strip broken sourceMappingURL comments from node_modules so Rollup never
// attempts to load the missing maps that Radix UI ships. This prevents the
// native Rollup layer from printing "Error when using sourcemap" lines that
// Vercel's log scanner incorrectly counts as build failures.
const stripNodeModulesSourcemaps = {
  name: 'strip-node-modules-sourcemaps',
  transform(code: string, id: string) {
    if (!id.includes('node_modules')) return null;
    return {
      code: code.replace(/\/\/[#@]\s*sourceMappingURL=\S+/g, ''),
      map: null,
    };
  },
};

export default defineConfig({
  customLogger: logger,
  base: basePath,
  plugins: [
    stripNodeModulesSourcemaps,
    react(),
    tailwindcss(),
    // Replit-only plugins — skipped on Vercel/Netlify builds
    ...(isReplit
      ? [
          await import('@replit/vite-plugin-runtime-error-modal').then((m) =>
            m.default(),
          ),
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
    // Suppress "Error when using sourcemap" Vite warnings that Vercel's log
    // scanner incorrectly counts as build errors (Radix UI ships broken maps).
    sourcemap: false,
    rollupOptions: {
      onwarn(warning, warn) {
        // Drop source-map-related warnings entirely
        if (warning.code === 'SOURCEMAP_ERROR') return;
        warn(warning);
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
