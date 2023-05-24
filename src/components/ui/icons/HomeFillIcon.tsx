import React from "react";
import { AiFillHome } from "react-icons/ai";

type Props = {
  className?: string;
};

export default function HomeFillIcon({ className = "w7 h-7" }: Props) {
  return <AiFillHome className={className} />;
}
