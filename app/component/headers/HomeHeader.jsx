import Image from "next/image";
import React from "react";

const HomeHeader = ({  }) => {
  return (
    <>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800">
        <Image
          src="/icon.png"
          alt="icon"
          width={36}
          height={36}
          className="rounded-full"
        />
      
          <div className="flex flex-col leading-tight">
            <span className="text-[17px] font-semibold">Venu Sharma</span>

            <span className="text-xs text-neutral-500">
              building systems & architectures
            </span>
          </div>
       
      </div>
        <div className="flex border-b border-neutral-800 text-sm">
          <div className="flex-1 text-center py-3 border-b-2 border-sky-500 font-semibold">
            Overview
          </div>
          <div className="flex-1 text-center py-3 text-neutral-500">Tools</div>
        </div>
      
    </>
  );
};

export default HomeHeader;
