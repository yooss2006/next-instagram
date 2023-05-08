import { getUserByUsername } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOption } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  const session = await getServerSession(authOption);
  const user = session?.user;
  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }
  return getUserByUsername(user.userName).then((data) =>
    NextResponse.json(data)
  );
}
