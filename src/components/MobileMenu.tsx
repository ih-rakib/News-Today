"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu}>
        {open ? (
          <AiOutlineClose size={21}></AiOutlineClose>
        ) : (
          <AiOutlineMenu size={21}></AiOutlineMenu>
        )}
      </button>
    </div>
  );
};
