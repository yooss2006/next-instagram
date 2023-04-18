import React from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]">
      <button
        className="bg-white p-[0.3rem] rounded-sm text-base hover:opacity-90 transition-opacity duration-100"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
