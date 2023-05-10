import { SimplePost } from "@/model/post";
import { parseDate } from "@/util/date";
import Image from "next/image";
import React from "react";
import Avatar from "./ui/Avatar";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";

type Props = {
  post: SimplePost;
};

export default function PostListCard({ post }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  console.log(userImage);
  return (
    <>
      <div>
        <Avatar image={userImage} highLight />
        <span>{username}</span>
      </div>
      <Image
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
      />
      <div>
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div>
        <p>{`${likes?.length ?? 0} ${likes?.length > 1 ? "likes" : ""}`}</p>
        <p>
          <span>{username}</span>
          {text}
        </p>
        <p>{parseDate(createdAt)}</p>
        <form>
          <input type="text" placeholder="Add a comment..." />
          <button>post</button>
        </form>
      </div>
    </>
  );
}
