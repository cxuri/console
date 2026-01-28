"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Zap, Settings, Layers } from "lucide-react";

const navItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "SDUI Builder", href: "/admin/sdui", icon: Layers },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Automations", href: "/admin/automations", icon: Zap },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white flex flex-col h-full">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold tracking-tighter text-blue-600">Rivoa Console</h2>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? "bg-blue-50 text-blue-600 font-medium" 
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t text-xs text-slate-400">
        v1.0.0-alpha • Rivoatech
      </div>
    </aside>
  );
}