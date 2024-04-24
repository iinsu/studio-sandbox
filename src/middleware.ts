import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedParams = ["allowed"];

export const config = {
  matcher: "/",
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  let changed = false;

  url.searchParams.forEach((_, key) => {
    if (!allowedParams.includes(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  });

  // Avoid infinite loop by only redirecting if the query
  // params were changed
  if (changed) {
    return NextResponse.rewrite(url);
  }
}
