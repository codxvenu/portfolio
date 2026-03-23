"use client";
import Posts from "@/app/component/Posts";

import HomeHeader from "@/app/component/headers/HomeHeader";
<<<<<<< HEAD

import { useEffect, useRef, useState } from "react";
import {posts,TechStack} from "@/app/Constants"
=======
import Footer from "@/app/component/Footer";
import { useEffect, useState } from "react";
import {posts,projects} from "@/app/Constants"
>>>>>>> c1baefe1f6e09d2646c8333e0c2b0e33e481e543
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
<<<<<<< HEAD
          postz={posts.filter(i=>i.section == "home")}
          Imageref={Imageref}
          setImage={setImage}
          />
          </>
   
=======
          postz={posts.filter(i=> !i.threadId && !i.threadTitle)}
        />
      <Footer/>
      </div>
    </div>
>>>>>>> c1baefe1f6e09d2646c8333e0c2b0e33e481e543
  );
}
