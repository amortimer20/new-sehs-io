// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Orbitron",
        cssVariable: "--font-orbitron"
      },
      {
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono"
      }
    ]
  }
});