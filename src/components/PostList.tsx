"use client";
import usePosts from "@/hooks/posts";
import React from "react";
import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";

export default function PostList() {
  const { posts, isLoading: loading } = usePosts();
  return (
    <section>
      {loading && (
        <div className="text-center mt-4">
          <GridSpinner color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post, index) => (
              <li key={post.id} className="mb-4">
                <PostListCard post={post} priority={index < 2} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
