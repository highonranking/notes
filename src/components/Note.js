/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Note = forwardRef(({ content, initialPos, onDelete, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="rounded-lg text-gray-500 bg-yellow-100 cursor-move p-3 w-auto max-w-48 text-wrap select-none border-2 border-red-300 relative"
      style={{
        position: "absolute",
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
      }}
      {...props}
    >
      <div
        className="absolute inset-0 w-auto rounded-lg animate-border"
        style={{ zIndex: -1 }}
      ></div>
      👉🏻 {content}
      <button className="absolute top-0 right-0 text-red-300 hover:text-red-500" onClick={onDelete}>
        X
      </button>
    </div>
  );
});

export default Note;
