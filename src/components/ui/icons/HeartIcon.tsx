import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

type Props = {
  className?: string;
};

export default function HeartIcon({ className = "w7 h-7" }: Props) {
  return <AiOutlineHeart className={className} />;
}
