"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import ColorButton from "./ui/ColorButton";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <ColorButton
          key={provider.name}
          text={`Sign in with ${provider.name}`}
          onClick={() => signIn(provider.id, { callbackUrl })}
          size="big"
        />
      ))}
    </>
  );
}
