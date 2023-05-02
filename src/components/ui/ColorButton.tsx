import React from "react";

type Props = {
  text: string;
  onClick: () => void;
  size?: "small" | "big";
};

export default function ColorButton({ text, onClick, size = "small" }: Props) {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem] ${
        size === "big" ? "p-[0.3rem]" : "p-[0.15rem]"
      }`}
    >
      <button
        className={`bg-white p-[0.3rem] rounded-sm text-base hover:opacity-90 transition-opacity duration-100 ${
          size === "big" ? "p-5 text-2xl" : "p-[0.3rem] text-base"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
