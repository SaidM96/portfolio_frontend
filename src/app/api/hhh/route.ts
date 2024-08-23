import { NextResponse } from 'next/server';

// Handle GET requests
export async function GET() {
  return NextResponse.json({ message: 'Hello from Next.js with GET!' });
}

// Handle POST requests
export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: 'Hello from Next.js with POST!', data });
}
