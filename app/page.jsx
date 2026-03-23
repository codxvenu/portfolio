"use client";
import Posts from "@/app/component/Posts";
import HomeHeader from "@/app/component/headers/HomeHeader";

import { useEffect, useState } from "react";
import {posts,projects} from "@/app/Constants"
export default function XMobileExactClonePortfolio() {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center max-h-max mb-12">
      <div className="w-full max-w-md border-x border-neutral-900 relative">
      
      <HomeHeader/>
        <Posts
          postz={posts.filter(i=> !i.threadId || !i.threadTitle)}
        />
       
      </div>
    </div>
  );
}
