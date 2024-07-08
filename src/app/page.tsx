"use client";
import { useState } from "react";

export default function Home() {
	const [state, setState] = useState("");
	const [state2, setState2] = useState(false);
	const chemsya = [
		"ت",
		"ث",
		"د",
		"ذ",
		"ر",
		"ز",
		"س",
		"ش",
		"ص",
		"ض",
		"ط",
		"ظ",
		"ل",
		"ن",
	];

	function swap(word: string, range: number, push_list: string[]) {
		const l = chemsya.includes(word[range]);
		if (l === true) {
			word = word.slice(0, range + 1) + "\u0651" + word.slice(range + 1);
			push_list.push(word);
		} else {
			push_list.push(word);
		}

	}
	function applyChedah(str: string) {
		let d = str.split(" ");
		let rs: string[] = [];
		d.forEach((e) => {
			// ladi, lati, ina, ana cases
			if (e === "وأن" || e === "وإن") {
				e = e.slice(0, 3) + "\u0651" + e.slice(3);
				rs.push(e);
				return
			}
			//
			if (e === "والذي" || e === "والتي") {
				e = e.slice(0, 3) + "\u0651" + e.slice(3);
				rs.push(e);
				return
			}

			if (e === "الذي" || e === "التي" || e === "إن" || e === "أن") {
				e = e.slice(0, 2) + "\u0651" + e.slice(2);
				rs.push(e);
				return
			}

			if (e.startsWith("ال") === true) {
				swap(e, 2, rs)
			} else if (e.startsWith("وال") === true || e.startsWith("فال") === true) {
				swap(e, 3, rs)
			}
			else {
				rs.push(e);
			}
		});
		setState(rs.join(" "));
	}
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex  flex-col items-center gap-7">
				<p>text?</p>
				<textarea
					onChange={(e) => {
						setState(e.target.value);
						setState2(false);
					}}
					className="text-black"
				/>
				<button
					className="text-blue-500"
					onClick={() => {
						setState2(true);
						applyChedah(state);
					}}
				>
					Validate
				</button>
			</div>
			{state2 === true && (
				<div className="flex  flex-col items-center gap-7">
					<p>{state}</p>
				</div>
			)}
		</main>
	);
}
