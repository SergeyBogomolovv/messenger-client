import { NextRequest, NextResponse } from 'next/server'
const authRoutes = ['/login', '/registration']

export default async function middlewate(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isOnAuthRoute = authRoutes.includes(pathname)

  if (!request.cookies.has('refreshToken') && !isOnAuthRoute) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
  const authenticated = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/verify-token/${request.cookies.get('refreshToken')?.value}`,
    )
  ).json()
  if (isOnAuthRoute && authenticated) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
  if (!isOnAuthRoute && !authenticated) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
