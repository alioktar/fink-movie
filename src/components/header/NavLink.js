import React, { useState } from "react";

export const NavLink = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={active && "active"}
      onClick={(e) => {
        e.preventDefault();
        setActive(!active);
      }}
    >
      {children}
    </button>
  );
};
