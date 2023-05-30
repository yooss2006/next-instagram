import UserSearch from "@/components/UserSearch";
import { Metadata } from "next";
import React from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "user search",
  description: "search user",
};

export default function SearchPage() {
  return <UserSearch />;
}
