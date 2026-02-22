"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Demo credentials (change to anything you want)
  const VALID_EMAIL = "richardthompson@gmail.com";
  const VALID_PASSWORD = "Password123";

  function handleLogin() {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      localStorage.setItem("loggedIn", "true");
      setError("");
      router.push("/dashboard");
    } else {
      setError("Invalid login details");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-black">

        <div className="text-center mb-6">
  <h1 className="text-2xl font-bold text-black">
    Welcome to CleaPay
  </h1>
  <p className="text-gray-700 mt-2 font-medium">
    Enter your credentials to access your account
  </p>
</div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-600 font-semibold text-sm text-center">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Login
        </button>

      </div>
    </div>
  );
}