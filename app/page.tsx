"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Add multiple valid users here
  const USERS = [
    {
      email: "richardthompson@gmail.com",
      password: "Password123",
    },
    {
      email: "brandeefloyd90@gmail.com",
      password: "Trial20",
    },
    {
      email: "user@cleapay.com",
      password: "User789",
    },
  ];

  function handleLogin() {
    const validUser = USERS.find(
      (user) =>
        user.email === email.trim() &&
        user.password === password.trim()
    );

    if (validUser) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userEmail", validUser.email);
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
          <h1 className="text-2xl font-bold">
            Welcome to CleaPay
          </h1>
          <p className="text-gray-700 mt-2">
            Enter your credentials to access your account
          </p>
        </div>

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
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
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