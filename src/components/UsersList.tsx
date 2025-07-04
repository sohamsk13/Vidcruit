"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function UsersList() {
  const users = useQuery(api.users.getUsers);

  if (users === undefined) {
    return <div>Loading users...</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Users in Convex:</h2>
      {users.length === 0 ? (
        <p>No users found in Convex database</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user._id} className="p-2 border rounded">
              <strong>{user.name}</strong> - {user.email} ({user.role})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 