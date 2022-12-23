import { NextResponse } from "next/server";
import { getCookie, getCookies, setCookie } from "cookies-next";

export function middleware(req) {
  const pathname  = req.nextUrl.clone();
  
  // setCookie("hey", 'asasa');
  // const token = getCookie("hey");
  // const token = req.cookies.get('jwt');
  const token = null;
  console.log("Cookies:", token)
  console.log("pathname", pathname)
  const baseURL = "http://localhost:3000"

  // If token is not available in the cookies => redirect to login page
  
  if (!pathname.href.includes("/auth") && !token ) {
    console.log("No jwt");
    return NextResponse.redirect(`${pathname.origin}/login`);
  }
  
  
  // const token = req.cookies.token;

  // if (pathname.includes("/api")) {
  //   return NextResponse.next();
  // }
  // // Check if token exists
  // if (!pathname.includes("/auth") && !token) {
  //   return NextResponse.redirect("/auth/login");
  // } else if (pathname.includes("/auth") && token) {
  //   return NextResponse.redirect("/");
  // }
}
