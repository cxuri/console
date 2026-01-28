import { neonAuthMiddleware } from "@neondatabase/auth/next/server";

export default neonAuthMiddleware({
  loginUrl: "/auth/sign-in", // Where to send logged-out users
});

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};