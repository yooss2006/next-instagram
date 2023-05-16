"use client";
import { DetailUser } from "@/model/user";
import { PropagateLoader } from "react-spinners";
import React, { use } from "react";
import useSWR from "swr";
import Link from "next/link";
import Avatar from "./ui/Avatar";
import ScrollableBar from "./ui/ScrollableBar";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>("/api/me");
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-0">
      {isLoading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        <>
          {(!users || users?.length === 0) && (
            <p>팔로우중인 유저가 없습니다.</p>
          )}
          {users && users?.length > 0 && (
            <ScrollableBar>
              {users.map(({ username, image }, index: number) => (
                <Link
                  key={index}
                  className="flex flex-col items-center w-20"
                  href={`/user/${username}`}
                >
                  <Avatar image={image} highLight />
                  <p className="text-sm text-ellipsis overflow-hidden text-center">
                    {username}
                  </p>
                </Link>
              ))}
            </ScrollableBar>
          )}
        </>
      )}
    </section>
  );
}
