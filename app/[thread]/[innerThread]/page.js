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
<>
      <ThreadHeader activeThread={innerThread} onClick={()=>router.back()}/>
   
        <Posts
          postz={post}
          activeThread={true}
          />
          </>
   
  );
}
