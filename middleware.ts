import { NextResponse } from "next/server";

export default async function Middleware() {
  const response = NextResponse.next();
  response.cookies.set("middleware-repro", "from-middleware");
  return response;
}
