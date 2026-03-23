import Image from "next/image";
import React from "react";
import {ChevronRight} from "@/app/component/icons"
const Header = ({ onClick,activeThread }) => {
    console.log(activeThread);
    
  return (
    <>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800">
        <button onClick={onClick}>
        <ChevronRight
          className="cursor-pointer text-neutral-400 hover:text-white transition"
          
        />
        </button>
        <small className="text-sm font-medium text-neutral-300 capitalize">{activeThread}</small>
      </div>

      <div className="px-4 py-2 text-xs text-neutral-500 border-b border-neutral-800">
        {activeThread} thread
      </div>
    </>
  );
};

export default Header;
