import { raw } from "hono/html";

import { twMerge } from "tailwind-merge";

export default function Profile({ class: className }: { class?: string }) {
	return (
		<div class={twMerge("flex flex-col items-center", className)}>
			<img
				src="images/yvvki.webp"
				alt="Face"
				class="w-[150px] [image-rendering:pixelated]"
			/>
			<img src="images/yvvki.svg" alt="Yuuki Rika" class="h-10" />
		</div>
	);
}

export const quote = "Carborundum magical femboy, self-diagnosed AuDHD";

export function Description({ class: className }: { class?: string }) {
	return (
		<div class={twMerge(className, "*:py-1")}>
			<p>
				<span class="font-ark">{raw("結城リカ")}</span>{" "}
				<span class="font-emoji">{raw("🐱🐰🎀🖤")}</span>
			</p>
			<p>{raw(`> ${quote}`)}</p>
			<p>
				<i>{raw("(he/her/Rika)")}</i>
				<br />
				<b>{raw("INFP-T • 7w8 sx/sp")}</b>
			</p>
			<p>
				<span class="font-emoji">
					<span title="Indonesian femboy">{raw("🇮🇩🏳️‍⚧️")}</span>{" "}
					<span title="Kodocon">{raw("🎒🍼")}</span>{" "}
					<span title="Proshipper">{raw("🌈🍖")}</span>
				</span>
			</p>
		</div>
	);
}
