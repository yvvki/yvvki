import honox, { devServerDefaultOptions } from "honox/vite";
import client from "honox/vite/client";
import ssg from "@hono/vite-ssg";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const entry = "./app/server.ts";
const input = ["./app/client.ts", "./app/style.css"];

const clientConfig = defineConfig({
	plugins: [client({ input }), tailwindcss()],
});

const serverConfig = defineConfig({
	plugins: [
		honox({
			entry,
			devServer: {
				exclude: [...devServerDefaultOptions.exclude, /^\/public\/.+/],
			},
			client: { input },
		}),
		tailwindcss(),
		ssg({ entry }),
	],
	build: {
		emptyOutDir: false,
	},
});

export default defineConfig(({ mode }) =>
	mode === "client" ? clientConfig : serverConfig,
);
