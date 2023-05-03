import { User } from "@/model/user";
import React from "react";
import Avatar from "./ui/Avatar";

type Props = {
  user: User;
};

export default function SideBar({ user: { name, userName, image } }: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{userName}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">Abount. Press</p>
      <p className="font-bold text-sm mt-8 text-neutral-500">
        @Copyright 어쩌구
      </p>
    </>
  );
}
