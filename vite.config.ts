import path from "node:path";

import honox, { devServerDefaultOptions } from "honox/vite";
import client from "honox/vite/client";
import ssg from "@hono/vite-ssg";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const entry = "./app/server.ts";
const input = ["./app/client.ts", "./app/style.css"];

const clientConfig = defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "app/"),
		},
		builtins: [/^node:/],
	},
	plugins: [client({ input }), tailwindcss({ optimize: { minify: false } })],
	build: {
		minify: false,
		cssMinify: false,
	},
});

const serverConfig = defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "app/"),
		},
		builtins: [/^node:/],
	},
	plugins: [
		honox({
			entry,
			devServer: {
				exclude: [...devServerDefaultOptions.exclude, /^\/public\/.+/],
			},
			client: { input },
		}),
		tailwindcss({ optimize: { minify: false } }),
		ssg({ entry }),
	],
	build: {
		emptyOutDir: false,
	},
});

export default defineConfig(({ mode }) =>
	mode === "client" ? clientConfig : serverConfig,
);
