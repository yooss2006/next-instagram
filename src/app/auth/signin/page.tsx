import { authOption } from "@/app/api/auth/[...nextauth]/route";
import Signin from "@/components/Signin";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Signin",
  description: "Signup or Login to Instargram",
};

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOption);
  if (session) {
    //로그인 되어 있다면?
    redirect("/");
  }
  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-[30%]">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
