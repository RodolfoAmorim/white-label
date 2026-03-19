import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get('host')

  const response = NextResponse.next()

  if (host) {
    response.headers.set('x-host-name', host)
  }

  return response
}
