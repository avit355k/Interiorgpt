"use client";

import { useUserData } from "@/context/UserContext";

export default function Dashboard() {
  const user = useUserData();

  if (!user) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="border rounded-lg p-4 space-y-2">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="w-20 h-20 rounded-full"
        />

        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>

        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>

        <p>
          <span className="font-semibold">Credits:</span> {user.credits}
        </p>
      </div>
    </div>
  );
}