"use client";
import Posts from "@/app/component/Posts";
import ThreadHeader from "@/app/component/headers/ThreadHeader";

import { useEffect, useState } from "react";
import {posts} from "@/app/Constants"
import { useParams } from "next/navigation";
export default function Thread() {
 const params = useParams();
 const {thread} = params; 

  const [post, setPost] = useState();
  const [activeThread, setActiveThread] = useState(false);
  useEffect(()=>{
    setPost(posts.filter(i=>i.threadId === thread));
  },[])
  return (
    <div className="bg-black text-white min-h-screen flex justify-center max-h-max mb-12">
      <div className="w-full max-w-md border-x border-neutral-900 relative">
      
      <ThreadHeader activeThread={thread} />
   
        <Posts
          postz={post}
        />
       
      </div>
    </div>
  );
}
