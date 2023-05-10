"use client";
import { SimplePost } from "@/model/post";
import React from "react";
import useSWR from "swr";
import { GridLoader } from "react-spinners";
import PostListCard from "./PostListCard";

export default function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");
  console.log(posts);
  return (
    <section>
      {loading && (
        <div>
          <GridLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post) => (
              <li key={post.id}>
                <PostListCard post={post} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
