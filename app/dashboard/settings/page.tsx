"use client";

import { useEffect, useState } from "react";

export default function ProfileSettings() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  // Load saved profile
  useEffect(() => {
    const savedProfile = localStorage.getItem("profileSettings");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setFullName(parsed.fullName || "");
      setEmail(parsed.email || "");
      setPhone(parsed.phone || "");
      setDarkMode(parsed.darkMode || false);
      setTwoFA(parsed.twoFA || false);
      setAvatarPreview(parsed.avatar || null);
    }
  }, []);

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  function handleSave() {
    const profile = {
      fullName,
      email,
      phone,
      darkMode,
      twoFA,
      avatar: avatarPreview,
    };

    localStorage.setItem("profileSettings", JSON.stringify(profile));
    alert("Profile updated successfully.");
  }

  return (
    <div
  className={`min-h-screen p-6 ${
    darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
  }`}
>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8 space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Profile Settings</h1>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Manage your personal information and security settings
          </p>
        </div>

        {/* Profile Overview */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="mb-2"
            />
            <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Upload profile picture
            </p>
          </div>
        </div>

        {/* Personal Info */}
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Personal Information</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Security */}
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Security</h2>

          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg"
          />

          <div className="flex items-center justify-between">
            <span>Enable Two-Factor Authentication</span>
            <input
              type="checkbox"
              checked={twoFA}
              onChange={() => setTwoFA(!twoFA)}
            />
          </div>
        </div>

        {/* Preferences */}
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Preferences</h2>

          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}