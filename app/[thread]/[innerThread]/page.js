"use client";
import Posts from "@/app/component/Posts";
import ThreadHeader from "@/app/component/headers/ThreadHeader";

import { useEffect, useState } from "react";
import {posts} from "@/app/Constants"
import { useParams, useRouter } from "next/navigation";
export default function Thread() {
 const params = useParams();
 const {innerThread} = params; 
const router = useRouter();
  const [post, setPost] = useState();
  useEffect(()=>{
    setPost(posts.filter(i=>i.threadId === innerThread.toLowerCase()));
  },[])
  return (
    <div className="bg-black text-white min-h-screen flex justify-center max-h-max mb-12">
      <div className="w-full max-w-md border-x border-neutral-900 relative">
      
      <ThreadHeader activeThread={innerThread} onClick={()=>router.push("/"+window.location.pathname.split("/")[0])}/>
   
        <Posts
          postz={post}
          activeThread={true}
        />
       
      </div>
    </div>
  );
}
