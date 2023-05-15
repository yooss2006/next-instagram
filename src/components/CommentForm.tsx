import React from "react";

export default function CommentForm() {
  return (
    <form className="flex border-t px-3 border-neutral-300 items-senter">
      <input
        className="w-full border-none outline-none p-3"
        type="text"
        placeholder="Add a comment..."
      />
      <button className="font-bold text-sky-500 ml-2">post</button>
    </form>
  );
}
