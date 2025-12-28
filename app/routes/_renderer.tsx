import { Link, Script } from "honox/server";
import { jsxRenderer } from "hono/jsx-renderer";

import { twJoin } from "tailwind-merge";

import Profile, { Description, quote } from "@/components/profile";

export default jsxRenderer(({ children }, c) => {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>yvvki::Rika</title>
				<meta name="author" content="Yuuki Rika" />
				<meta name="description" content={quote} />

				<link rel="icon" href="images/yvvki.webp" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin=""
				/>
				<Link href="/app/style.css" rel="stylesheet" />
				<Script
					src="/app/client.ts"
					async
					nonce={c.get("secureHeadersNonce")}
				/>
			</head>
			<body
				class={twJoin(
					"pt-1 px-5 sm:ps-20 sm:pe-0 sm:w-160",
					"bg-[#fce] text-[#312]",
					"leading-none",
					"flex flex-row",
				)}
			>
				<header class={twJoin("w-[150px] shrink-0", "me-4 ", "font-micro")}>
					<Profile />
					<Description class="w-full" />
				</header>
				<main class="">{children}</main>
			</body>
		</html>
	);
});
