/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const Note = forwardRef(({ content, initialPos, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="rounded-lg text-gray-500 bg-yellow-100 cursor-move p-3 w-52 select-none border-2 border-red-300 relative"
      style={{
        position: "absolute",
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
      }}
      {...props}
    >
      <div
        className="absolute inset-0 rounded-lg animate-border"
        style={{ zIndex: -1 }}
      ></div>
      📌 {content}
    </div>
  );
});

export default Note;
