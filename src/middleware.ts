import { NextRequest, NextResponse } from 'next/server'
const authRoutes = ['/login', '/registration']

export default async function middlewate(request: NextRequest) {
  const { pathname } = request.nextUrl
  const authenticated = await (
    await fetch(`${process.env.SERVER_URL}/auth/verify-token`, {
      credentials: 'same-origin',
    })
  ).json()
  if (authRoutes.includes(pathname) && authenticated) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
  if (!authRoutes.includes(pathname) && !authenticated) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
  return
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
