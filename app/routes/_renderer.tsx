import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children }) => {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>The mind of a cat</title>
				<meta name="author" content="Yuuki Rika" />
				<meta name="description" content="結城理科" />

				<link rel="stylesheet" href="style.css" />
			</head>
			<body class="compact">{children}</body>
		</html>
	);
});
