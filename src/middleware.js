import { NextResponse } from "next/server";

const publicRoutes = ["/", "/admin/login"];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isPublic = publicRoutes.includes(pathname);

  if (!token && !isPublic && (pathname.startsWith("/user") || pathname.startsWith("/admin"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // if (token && (pathname === "/" || pathname === "/admin/login")) {
  //   return NextResponse.redirect(new URL("/user/dashboard", request.url));
  // }
  return NextResponse.next();
}
