import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";

type Props = {
  className?: string;
};

export default function BookmarkFillIcon({ className = "w7 h-7" }: Props) {
  return <BsFillBookmarkFill className={className} />;
}
