"use client";
import Posts from "@/app/component/Posts";
import ThreadHeader from "@/app/component/headers/ThreadHeader";

import { useEffect, useState } from "react";
import {posts} from "@/app/Constants"
import { useParams, useRouter } from "next/navigation";
export default function Thread() {
 const params = useParams();
 const {thread} = params; 
const router = useRouter();
  const [post, setPost] = useState();
  const [activeThread, setActiveThread] = useState(false);
  useEffect(()=>{
    setPost(posts.filter(i=>i.threadId === thread));
  },[])
  return (
  <>
  <ThreadHeader activeThread={thread} onClick={()=>router.back()}/>

    <Posts
      postz={post}
    />
  </>
       
    
  );
}
