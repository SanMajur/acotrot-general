import React from "react";

export default function Button({ title }: { title?: string }) {
  return (
    <button className="btn bg-blue-700 uppercase w-36 my-8 hover:bg-blue-400 ring-2 ring-blue-600 text-gray-100 hover:text-gray-800">
      {title}
    </button>
  );
}
