import React from "react";
import { BsBookmark } from "react-icons/bs";

type Props = {
  className?: string;
};

export default function BookmarkIcon({ className = "w7 h-7" }: Props) {
  return <BsBookmark className={className} />;
}
