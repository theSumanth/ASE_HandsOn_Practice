import React from "react";

export const Th = ({ children }) => {
  return (
    <th className="flex border-double border-b-2 border-r-2 border-l-2 border-gray-300 w-1/4 items-center justify-center">
      {children}
    </th>
  );
};
