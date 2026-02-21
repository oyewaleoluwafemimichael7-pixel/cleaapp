"use client";

export default function SettlementPage() {
  const withdrawals = [
    {
      id: "WD-1001",
      date: "2026-02-10",
      amount: 682520,
      fee: 520,
      payout: 682000,
      bank: "WEMA BANK",
      accountNumber: "0125529912",
      accountName: "Midwave Technology LTD",
      status: "completed",
    },
    {
      id: "WD-1002",
      date: "2026-02-15",
      amount: 638862.49,
      fee: 862.49,
      payout: 638000,
      bank: "Access Bank",
      accountNumber: "0769982601",
      accountName: "Keefa Idris Olalekan",
      status: "failed",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <div>
        <h1 className="text-2xl font-bold">Settlement</h1>
        <p className="text-gray-500">
          View your withdrawal history and settlements
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-2">
          Withdrawal History
        </h2>
        <p className="text-gray-500 mb-6">
          Track all your withdrawal requests and their status
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="border-b text-gray-600">
              <tr className="text-left">
                <th className="py-3 pr-6">Date</th>
                <th className="py-3 pr-6">Amount</th>
                <th className="py-3 pr-6">Fee</th>
                <th className="py-3 pr-6">Payout</th>
                <th className="py-3 pr-6">Bank Name</th>
                <th className="py-3 pr-6">Account Number</th>
                <th className="py-3 pr-6">Account Name</th>
                <th className="py-3 pr-6">Status</th>
              </tr>
            </thead>

            <tbody>
              {withdrawals.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-4 pr-6">{item.date}</td>
                  <td className="py-4 pr-6">
                    ₦{item.amount.toLocaleString()}
                  </td>
                  <td className="py-4 pr-6 text-red-500">
                    ₦{item.fee.toLocaleString()}
                  </td>
                  <td className="py-4 pr-6 font-medium">
                    ₦{item.payout.toLocaleString()}
                  </td>
                  <td className="py-4 pr-6">{item.bank}</td>
                  <td className="py-4 pr-6">{item.accountNumber}</td>
                  <td className="py-4 pr-6">{item.accountName}</td>
                  <td className="py-4 pr-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}