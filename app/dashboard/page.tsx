"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Wallet,
  Settings,
  DollarSign,
  Menu,
  X,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  // Authentication check
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      setAuthorized(true);
    } else {
      router.replace("/");
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("loggedIn");
    router.replace("/");
  }

  function copyDetails() {
    const details = `
Account Name: Torven LLC
Account Number: 10148100290685
Routing Number: 021000021
Bank Name: Chase Bank
    `;
    navigator.clipboard.writeText(details);
    alert("Account details copied!");
  }

  if (!authorized) return null;

  return (
    <div className="min-h-screen bg-gray-100 relative">

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg">CleaPay</h2>
          <X
            className="cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        <div className="p-6 space-y-6">

          <Link
            href="/dashboard"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 hover:text-gray-700"
          >
            <Home size={18} /> Dashboard
          </Link>

          <Link
            href="/dashboard/withdraw"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 hover:text-gray-700"
          >
            <Wallet size={18} /> Withdraw
          </Link>

          <Link
            href="/dashboard/settlement"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 hover:text-gray-700"
          >
            <DollarSign size={18} /> Settlement
          </Link>

          <Link
            href="/dashboard/settings"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 hover:text-gray-700"
          >
            <Settings size={18} /> Settings
          </Link>
        </div>

        <div className="absolute bottom-6 left-6">
          <button
            onClick={handleLogout}
            className="text-red-600 font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 bg-white shadow">
        <Menu
          className="cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
        <h1 className="font-semibold text-black">Hi, GORBUNOVS</h1>
        <div className="font-bold text-black">CleaPay</div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">

        {/* Account Details Card */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-lg font-bold text-black">
            USD Account Details
          </h2>

          <div className="space-y-2 text-black">
            <p className="font-semibold">
              Account Name: <span className="font-bold">Torven LLC</span>
            </p>

            <p className="font-semibold">
              Account Number: <span className="font-bold">10148100290685</span>
            </p>

            <p className="font-semibold">
              Routing Number: <span className="font-bold">021000021</span>
            </p>

            <p className="font-semibold">
              Account Type: <span className="font-bold">Checking</span>
            </p>

            <p className="font-semibold">
              Bank Name: <span className="font-bold">Chase Bank</span>
            </p>
          </div>

          <button
            onClick={copyDetails}
            className="mt-4 border px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Copy All Details
          </button>
        </div>

        {/* Wallet Card */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-bold text-black">
            Wallet Balance
          </h2>

          <p className="text-4xl font-bold mt-4 text-black">
            $85,000.91
          </p>

          <p className="text-black font-semibold mb-6">USD</p>

          <button className="bg-black text-white py-3 rounded-lg w-full hover:opacity-90 transition">
            Request Withdrawal
          </button>
        </div>

      </div>
    </div>
  );
}