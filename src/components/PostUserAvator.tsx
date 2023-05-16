import React from "react";
import Avatar from "./ui/Avatar";

type Props = {
  image: string;
  username: string;
};

export default function PostUserAvator({ image, username }: Props) {
  return (
    <div className="flex items-center p-2">
      <Avatar size="medium" image={image} highLight />
      <span className="text-gray-900 font-bold ml-2">{username}</span>
    </div>
  );
}
