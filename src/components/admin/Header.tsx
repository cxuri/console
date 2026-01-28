"use client";
import { Search, Bell, User } from "lucide-react";
import { authClient } from "@/lib/auth/client";

export default function Header() {
  const { data: session } = authClient.useSession();

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-8">
      {/* Search Bar */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search everything..." 
          className="w-full bg-slate-50 border-none rounded-full py-2 pl-10 text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell size={20} />
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-2" />
        
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold leading-none">{session?.user?.name || "Admin"}</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">{session?.user?.metadata?.role || "Proprietor"}</p>
          </div>
          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}