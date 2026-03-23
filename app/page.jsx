"use client";
import Posts from "@/app/component/Posts";

import HomeHeader from "@/app/component/headers/HomeHeader";

import { useEffect, useRef, useState } from "react";
import {posts,TechStack} from "@/app/Constants"
export default function XMobileExactClonePortfolio() {
  const Imageref = useRef();
  const [image,setImage] = useState();
useEffect(()=>{
  const show = ()=>{
    const rect = Imageref.current.getBoundingClientRect()
  const mouseX = image
  console.log(rect.width)
  }
  show()
},[image])
  return (
    <>
      <HomeHeader/>
        <Posts
          postz={posts.filter(i=>i.section == "home")}
          Imageref={Imageref}
          setImage={setImage}
          />
          </>
   
  );
}
