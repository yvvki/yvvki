import ssg from "@hono/vite-ssg";
import honox, { devServerDefaultOptions } from "honox/vite";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig({
	plugins: [
		honox({
			entry,
			devServer: {
				exclude: [...devServerDefaultOptions.exclude, /^\/public\/.+/],
			},
		}),
		ssg({ entry }),
	],
});
