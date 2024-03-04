import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/authOptions';
import { Session } from '@/types/Session';
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pkValue = searchParams.get('pkValue');
  const session = await getServerSession({ req: request, ...authOptions });
  const typedSession = session as Session;
  const headers = typedSession
    ? {
        'Content-Type': 'application/json',
        authorization: typedSession.user.access_token,
      }
    : {
        'Content-Type': 'application/json',
      };

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v0/interview/questions/${pkValue}`,
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
      return NextResponse.json(data.data, { status: result.status });
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
