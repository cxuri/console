'use client';

import Link from "next/link";
import { useAuth } from "@/lib/auth/react";
import UserNav from "@/components/UserNav";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-black">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-lg font-bold">
          Home
        </Link>
        <Link href="/dashboard" className="text-lg">
          Dashboard
        </Link>
      </div>
      <div>
        {user ? (
          <UserNav user={user} />
        ) : (
          <Link href="/login" className="text-lg">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
