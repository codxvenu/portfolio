import Image from "next/image";
import React from "react";

const SearchHeader = ({ }) => {
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
        {search && (
          <div>
            <input
              type="text"
              className="rounded-full bg-neutral-800 text-[13px] p-3 py-1"
              placeholder="Search X"
            />
          </div>
        )}
      </div>
     
    </>
  );
};

export default SearchHeader;
