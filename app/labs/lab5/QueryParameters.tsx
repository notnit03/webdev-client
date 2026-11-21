"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const input = "me-2 rounded border border-neutral-300 px-2 py-1";
  const link = "me-2 mb-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white no-underline";
  const calc = (operation: string) =>
    `${HTTP_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`;
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input className={input} value={a} onChange={(e) => setA(e.target.value)} type="number" />
      <input className={input} value={b} onChange={(e) => setB(e.target.value)} type="number" />
      <br />
      <br />
      <a id="wd-query-parameter-add" className={link} href={calc("add")}>
        Add {a} + {b}
      </a>
      <a id="wd-query-parameter-subtract" className={link} href={calc("subtract")}>
        Subtract {a} - {b}
      </a>
      <a id="wd-query-parameter-multiply" className={link} href={calc("multiply")}>
        Multiply {a} × {b}
      </a>
      <a id="wd-query-parameter-divide" className={link} href={calc("divide")}>
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}
