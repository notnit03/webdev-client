"use client";
import { useState } from "react";
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const symbols: Record<string, string> = {
    add: "+",
    subtract: "-",
    multiply: "×",
    divide: "÷",
  };
  const calculate = async (op = operation) => {
    setError("");
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`,
    );
    const data = await response.json();
    if (!response.ok) {
      setResult("");
      setError(data.error);
      return;
    }
    setResult(`${data.a} ${symbols[op]} ${data.b} = ${data.result}`);
  };
  const input = "me-2 rounded border border-neutral-300 px-2 py-1";
  return (
    <div id="wd-calculator-next-api">
      <h3>Calculator (Next.js Web API)</h3>
      A: <input className={input} value={a} onChange={(e) => setA(e.target.value)} type="number" />
      B: <input className={input} value={b} onChange={(e) => setB(e.target.value)} type="number" />
      Operation:{" "}
      <select
        className={input}
        value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>
      <button
        type="button"
        onClick={() => calculate()}
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
      >
        Calculate
      </button>
      <br />
      <br />
      <input className={input} value={result} readOnly placeholder="result" />
      {error && <p className="mt-2 rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}
      <hr />
    </div>
  );
}
