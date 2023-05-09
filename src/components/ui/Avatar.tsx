import Image from "next/image";
import React from "react";

type Props = {
  image?: string | null;
  size?: "small" | "normal";
  highLight?: boolean;
};

export default function Avatar({
  image,
  size = "normal",
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

function getContainerStyle(size: string, highLight: boolean): string {
  const base = "rounded-full flex justify-center items-center";
  const highLightStyle = highLight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = size === "small" ? "w-9 h-9" : "w-[68px] h-[68px]";
  return `${base} ${highLightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  const base = "object-cover bg-white rounded-full";
  const sizeStyle =
    size === "small" ? "w-[34px] h-[34px] p-[0.1rem]" : "w-16 h-16 p-[0.2rem]";
  return `${base} ${sizeStyle}`;
}
