import { authServer } from "@/lib/auth/server";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const session = await authServer.getSession();
  
  // Guard: Ensure only Admins see this
  if (session?.user?.metadata?.role !== 'ADMIN') {
    redirect('/login');
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Console Overview</h1>
        <p className="text-slate-500">Welcome back, {session.user.name}.</p>
      </header>

      {/* Stat Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Active Users" value="1,284" change="+12%" />
        <StatCard title="SDUI Layouts" value="14" change="v2.4.0" />
        <StatCard title="Automations Run" value="45,032" change="99.9% Success" />
        <StatCard title="Server Latency" value="42ms" change="Neon Global" />
      </div>

      {/* Main Grid: SDUI Preview & Recent Logs */}
      <div className="grid gap-4 md:grid-cols-7">
        <div className="col-span-4 p-6 bg-white border rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">App Usage (Last 24h)</h3>
          <div className="h-[300px] flex items-center justify-center bg-slate-50 rounded border-dashed border-2">
             [Chart Placeholder: Integrate Recharts or Tremor here]
          </div>
        </div>
        
        <div className="col-span-3 p-6 bg-white border rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Recent Automations</h3>
          <div className="space-y-4">
            <LogEntry label="Welcome Email" status="Success" time="2m ago" />
            <LogEntry label="Stripe Webhook" status="Success" time="15m ago" />
            <LogEntry label="Layout Sync" status="Warning" time="1h ago" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Small Helper Components
function StatCard({ title, value, change }: any) {
  return (
    <div className="p-6 bg-white border rounded-xl shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <div className="flex items-baseline space-x-2">
        <h2 className="text-2xl font-bold">{value}</h2>
        <span className="text-xs text-green-600 font-medium">{change}</span>
      </div>
    </div>
  );
}

function LogEntry({ label, status, time }: any) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="font-medium">{label}</span>
      <span className="text-slate-400">{time}</span>
      <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
        {status}
      </span>
    </div>
  );
}