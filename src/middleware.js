import { NextResponse } from "next/server";

const publicRoutes = ["/", "/admin/login"];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isPublic = publicRoutes.includes(pathname);
  const redirectUrl = pathname.startsWith("/user") ? "/user/dashboard" : "/admin/client-management";

  if (!token && !isPublic && (pathname.startsWith("/user") || pathname.startsWith("/admin"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (token && (pathname === "/" || pathname === "/admin/login")) {
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
  return NextResponse.next();
}
