import { SimplePost } from "@/model/post";
import Image from "next/image";
import React from "react";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";
import Avatar from "./ui/Avatar";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <article className="rounded-lg shadow-md border-gray-200">
      <div className="flex items-center p-2">
        <Avatar size="medium" image={userImage} highLight />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />
      <ActionBar
        username={username}
        createdAt={createdAt}
        likes={likes}
        text={text}
      />
      <CommentForm />
    </article>
  );
}
