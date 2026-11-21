"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const input = "me-2 rounded border border-neutral-300 px-2 py-1";
  const link = "me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input className={input} value={a} onChange={(e) => setA(e.target.value)} type="number" />
      <input className={input} value={b} onChange={(e) => setB(e.target.value)} type="number" />
      <br />
      <br />
      <a id="wd-path-parameter-add" className={link} href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-path-parameter-subtract" className={link} href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-path-parameter-multiply" className={link} href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
        Multiply {a} × {b}
      </a>
      <a id="wd-path-parameter-divide" className={link} href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}
