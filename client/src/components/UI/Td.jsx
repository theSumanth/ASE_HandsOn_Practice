import React from "react";

export const Td = ({ children }) => {
  return (
    <td className="flex border-double border-2 border-gray-300 w-1/4 items-center justify-center">
      {children}
    </td>
  );
};
