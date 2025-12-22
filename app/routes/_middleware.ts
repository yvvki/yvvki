import { createRoute } from "honox/factory";
import { NONCE, secureHeaders } from "hono/secure-headers";

export default createRoute(
	secureHeaders({
		contentSecurityPolicy: {
			scriptSrc: [NONCE],
		},
	}),
);
