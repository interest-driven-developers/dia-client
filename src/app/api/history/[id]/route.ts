import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { Session } from "@/types/Session";

import { authOptions } from "../../auth/[...nextauth]/route";

const getToken = async () => {
  const session: any = await getServerSession(authOptions);
  const typedSession = session as Session;
  return typedSession.user?.access_token;
};

export async function GET(
  req: NextRequest,
  res: NextResponse,
  { params }: { params: { id: number } }
) {
  // const token = await getToken();
  console.log("test get", params.id);
  //   if (!token) {
  //     return new NextResponse("Unauthorized", { status: 403 });
  //   }
  //   const path = req.nextUrl.pathname.replace("/history", "");
  //   const response = await fetch(`${process.env.API_URL}${path}/`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     cache: "no-store",
  //   });

  //   const result = await response.json();

  //   if (response.ok) {
  //     try {
  //       return NextResponse.json(result);
  //     } catch (error) {
  //       console.log("error parsing response", error);
  //       return NextResponse.json(undefined);
  //     }
  //   } else {
  //     return NextResponse.json({
  //       error: result.error?.message || "An unknown error occurred",
  //     });
  //   }
}

export async function POST(request: NextRequest) {
  const token = await getToken();
  if (!token) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const body = JSON.stringify(await request.json());

  const path = request.nextUrl.pathname.replace("/game", "");

  const response = await fetch(`${process.env.API_URL}${path}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body,
  });

  const result = await response.json();

  if (response.ok) {
    try {
      return NextResponse.json(result);
    } catch (error) {
      console.log("error parsing response", error);
      return NextResponse.json(undefined);
    }
  } else {
    return NextResponse.json({
      error: result.error?.message || "An unknown error occurred",
    });
  }
}
