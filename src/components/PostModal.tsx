import React, { MouseEventHandler } from "react";
import CloseIcon from "./ui/icons/CloseIcon";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function PostModal({ onClose, children }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-neutral-900/70 z-50"
      onClick={handleClick}
    >
      <button
        className="fixed top-0 right-0 p-8 text-white"
        onClick={() => onClose()}
      >
        <CloseIcon />
      </button>
      {children}
    </section>
  );
}
