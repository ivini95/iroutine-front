import { NextResponse, NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value
    const loginUrl = new URL('/login', request.url)
    const profileURL = new URL('/profile', request.url)

    if(!token){
      if(request.nextUrl.pathname === '/login'){
        return NextResponse.next()
      }

      return NextResponse.redirect(loginUrl)
    }

    if(request.nextUrl.pathname === '/login'){
      return NextResponse.redirect(profileURL)
    }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login', '/profile', '/createTask', '/editTask', '/listTask', '/statusToday', '/stopwatch', '/task', '/taskToday', '/timer'],
};
