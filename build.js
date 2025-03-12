import { SveltePlugin } from "bun-plugin-svelte";

Bun.build({
  entrypoints: ["src/index.html"],
  outdir: "dist",
  target: "browser", // use "bun" or "node" to use Svelte components server-side
  plugins: [
    SveltePlugin({
      development: false, // turn off for prod builds. Defaults to false
    }),
  ],
});
