"use client";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState("");
  const [state2, setState2] = useState(false);
  function applyChedah(str: string) {
    let d = str.split(" ");

    let rs: string[] = [];
    d.forEach((e) => {
      if (e.startsWith("ال") === true) {
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
        const l = chemsya.includes(e[2]);
        if (l === true) {
          e = e.slice(0, 3) + "\u0651" + e.slice(3);

          rs.push(e);
        } else {
          rs.push(e);
        }
      } else {
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
