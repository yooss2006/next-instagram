import Image from "next/image";
import React from "react";

type AvatarSize = "small" | "medium" | "large";

type Props = {
  image?: string | null;
  size?: AvatarSize;
  highLight?: boolean;
};

export default function Avatar({
  image,
  size = "large",
  highLight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highLight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={getImageSizeStyle(size)}
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, highLight: boolean): string {
  const base = "rounded-full flex justify-center items-center";
  const highLightStyle = highLight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = getContainerSize(size);
  return `${base} ${highLightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: AvatarSize): string {
  const base = "object-cover bg-white rounded-full";
  switch (size) {
    case "small":
      return `${base} w-[34px] h-[34px] p-[0.1rem]`;
    case "medium":
      return `${base} w-[42px] h-[42px] p-[0.1rem]`;
    case "large":
      return `${base} w-16 h-16 p-[0.2rem]`;
  }
}

function getContainerSize(size: AvatarSize): string {
  switch (size) {
    case "small":
      return "w-9 h-9";
    case "medium":
      return "w-11 h-11";
    case "large":
      return "w-[68px] h-[68px]";
  }
}
