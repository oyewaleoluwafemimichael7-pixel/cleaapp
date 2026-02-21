"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function handleLogin() {
    localStorage.setItem("loggedIn", "true");
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          CleaPay Login
        </h1>

        <input
          type="text"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-lg"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90"
        >
          Login
        </button>
      </div>
    </div>
  );
}