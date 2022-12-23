import { NextResponse } from "next/server";

export function middleware(req) {
  // const { pathname } = req.nextUrl;
  const pathname = req.nextUrl;
  const origin = pathname.origin;

  // console.log("Pathname MW", pathname);
  // console.log("Origin MW", origin);

  const token = req.cookies.get("token");
  // console.log("token MW", token);
  
  const loginRoute = `${origin}/login`
  const homeRoute = `${origin}/home`
  // console.log("login", token);

//   if (!pathname.href.includes("/login") && !token) {
//     console.log('a')
//     return NextResponse.redirect(loginRoute);
//   } else if (pathname.href.includes("/login") && token) {
//     console.log('b')
//     return NextResponse.redirect(homeRoute);
//   } 
// }
}