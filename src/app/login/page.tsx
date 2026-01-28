'use client';

import { useAuth } from "@/lib/auth/react";
import { authClient } from "@/lib/auth/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      await authClient.signInWithOAuth({ provider: "google" });
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">Sign In</h1>
        <div className="flex flex-col items-center mt-8">
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign in with Google
          </button>
        </div>
      </main>
    </div>
  );
}
