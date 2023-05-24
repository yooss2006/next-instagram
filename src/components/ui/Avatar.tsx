import Image from "next/image";
import React from "react";

type AvatarSize = "small" | "medium" | "large" | "xlarge";

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
        className={getImageSizeStyle(size).image}
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
  const { container } = getImageSizeStyle(size);
  return `${base} ${highLightStyle} ${container}`;
}

type ImageSizeStyle = {
  container: string;
  image: string;
};

function getImageSizeStyle(size: AvatarSize): ImageSizeStyle {
  const base = "object-cover bg-white rounded-full";
  switch (size) {
    case "small":
      return {
        image: `${base} w-[34px] h-[34px] p-[0.1rem]`,
        container: "w-9 h-9",
      };
    case "medium":
      return {
        image: `${base} w-[42px] h-[42px] p-[0.1rem]`,
        container: "w-11 h-11",
      };
    case "large":
      return {
        image: `${base} w-16 h-16 p-[0.2rem]`,
        container: "w-[68px] h-[68px]",
      };
    case "xlarge":
      return {
        image: `${base} w-[138px] h-[138px] p-[0.3rem]`,
        container: "w-[142px] h-[142px]",
      };
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
}
