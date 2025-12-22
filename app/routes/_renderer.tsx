import { Script } from "honox/server";
import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children }, c) => {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>The mind of a cat</title>
				<meta name="author" content="Yuuki Rika" />
				<meta name="description" content="結城理科" />

				<Script
					src="/app/client.ts"
					async
					nonce={c.get("secureHeadersNonce")}
				/>
				<link href="/app/style.css" rel="stylesheet" />
			</head>
			<body class="compact">{children}</body>
		</html>
	);
});
