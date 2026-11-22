"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext } from "../AccountContext";
export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      setCurrentUser(user);
      router.push("/dashboard");
    } catch {
      setError("Unable to sign in");
    }
  };
  const input = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      {error && <p className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}
      <input
        placeholder="username"
        id="wd-username"
        className={`wd-username ${input}`}
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className={`wd-password ${input}`}
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign in
      </button>
      <Link id="wd-signup-link" href="/account/signup" className="text-blue-600">
        Sign up
      </Link>
    </div>
  );
}
