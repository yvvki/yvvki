import { raw } from "hono/html";

import Head from "@/components/profile";

export default function Home() {
	return (
		<div class="*:py-1">
			<p>
				{raw("hello there, I'm Yuuki Rika, I love cats!")}
				<br />
				{raw(
					"Sometimes I wonder how these fluffy creature think, I get confused and thought I am one of them instead >:3",
				)}
			</p>
			<img src="images/Tumblr_l_558207997466954.gif" alt="pookie cat lol" />
			<p>
				{raw("As you can see, it's pretty empty here...")}
				<br />
				{raw(
					"I'm still learning how to make websites lol XD so enjoy the cute cat for now!",
				)}
			</p>
		</div>
	);
}
