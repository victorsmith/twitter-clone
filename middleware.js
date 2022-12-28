import { NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - login (login page)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|login|_next/static|favicon.ico).*)",
  ],
};

export function middleware(req) {
  // const { pathname } = req.nextUrl;
  const pathname = req.nextUrl;
  const origin = pathname.origin;

  const token = req.cookies.get("token");
  
  console.log("Token Value", token);


  const loginRoute = `${origin}/login`;
  const homeRoute = `${origin}/home`;

  if (!token) {
    console.log("No token");
    return NextResponse.redirect(loginRoute);
  } 
  else {
    console.log("Token", token);
  }
}
