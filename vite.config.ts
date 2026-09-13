import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const config = defineConfig({
  plugins: [
    tanstackStart(),
    // experimental
    viteReact({ compiler: true }),
  ],
});

export default config;
