import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE === "true";
  const { pathname } = request.nextUrl;

  // On autorise la page de maintenance et les fichiers statiques
  if (
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") // pour servir CSS/JS/images
  ) {
    return NextResponse.next();
  }

  // Si maintenance activée → rewrite vers la page maintenance
  if (maintenanceMode) {
    return NextResponse.rewrite(
      new URL("/maintenance", request.url)
    );
  }

  return NextResponse.next();
}
