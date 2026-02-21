"use client";

import { useState } from "react";

export default function WithdrawPage() {
  const [amount, setAmount] = useState("");
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (!amount || !bank || !accountNumber || !accountName) {
      setMessage("Please fill all fields");
      return;
    }

    setMessage("Withdrawal request submitted successfully.");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 space-y-6">

        <div>
          <h1 className="text-2xl font-bold">Request Withdrawal</h1>
          <p className="text-gray-700 font-medium">
            Submit a withdrawal request to your bank account
          </p>
        </div>

        {message && (
          <div className="text-sm font-semibold text-blue-600">
            {message}
          </div>
        )}

        <div className="space-y-4">

          <input
            type="number"
            placeholder="Amount (USD)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="Bank Name"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="Account Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Submit Withdrawal
        </button>

      </div>
    </div>
  );
}