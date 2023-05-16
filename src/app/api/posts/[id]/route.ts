import { getFollowingPostsOf, getPost } from "@/service/post";
import { getUserByUsername } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOption } from "../../auth/[...nextauth]/route";

type Context = {
  params: { id: string };
};

export async function GET(request: NextResponse, context: Context) {
  console.log(context);
  const session = await getServerSession(authOption);
  const user = session?.user;
  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }
  return getPost(context.params.id).then((data) => NextResponse.json(data));
}
