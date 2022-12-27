import { NextResponse } from "next/server";

export function middleware(req) {
  // const { pathname } = req.nextUrl;
  const pathname = req.nextUrl;
  const origin = pathname.origin;

  const token = req.cookies.get("token");

  // TODO: testing 
  // console.log("Pathname", pathname);
  // console.log("Origin", origin);
  // console.log("*** token:", token);

  const loginRoute = `${origin}/login`;
  const homeRoute = `${origin}/home`;

  console.log("pathname.href", pathname.href);

  // Middle ware routing failed -> Try implementing another time
  // if (!pathname.href.includes("/login") && !token) {
  //   console.log('a')
  //   return NextResponse.redirect(loginRoute);
  // } else {
  //   console.log('b')
  //   return NextResponse.redirect(homeRoute);
  // }
}
