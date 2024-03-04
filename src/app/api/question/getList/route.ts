import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { Session } from '@/types/Session';
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('query');
  const session = await getServerSession({ req: request, ...authOptions });
  const typedSession = session as Session;
  const headers = session
    ? {
        'Content-Type': 'application/json',
        authorization: typedSession.user.access_token,
      }
    : {
        'Content-Type': 'application/json',
      };
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/questions?categoryValues=${id}`,
    {
      //   method: 'GET',
      headers: headers as HeadersInit,
      next: {
        revalidate: 0,
      },
    }
  );
  const data = await result.json();
  // console.log('res', data.data.pageData);
  //   return data
  //   return NextResponse.json({ data });
  try {
    if (data.status === 200) {
      return NextResponse.json(data.data.pageData, { status: result.status });
    }
    return NextResponse.json(
      {
        message: 'DB에서 에러를 리턴',
        error: result.statusText,
      },
      { status: result.status }
    );
  } catch (e) {
    return NextResponse.json({ error: '서버내부오류 발생' }, { status: 500 });
  }
}

export async function POST() {
  // const res = await fetch("https://data.mongodb-api.com/...", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY!,
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() }),
  // });

  // const data = await res.json();

  // return Response.json(data);
}