"use client"
import React, { useEffect, useRef, useState } from 'react'

const Casoul = ({featured }) => {
    const [slide,setSlide] = useState(1);
    const [width,setWidth] = useState(0);
    const casoulRec = useRef(0);
    useEffect(()=>{

      function update(){
        if(window.innerWidth < 768){
          setWidth(casoulRec.current.offsetWidth);
        }else{
          setWidth(casoulRec.current.offsetWidth * 0.8);
        }
      }
      update()
      window.addEventListener("resize",update)
      return ()=> window.removeEventListener("resize",update)
    },[]);
    
    
    useEffect(()=>{
        if(!featured?.length) return
        const interval = setInterval(()=>(
            setSlide((prev)=>featured?.length -1 == prev ? 0 : prev+1)
        ),5000);
        return ()=>clearInterval(interval)
    },[featured.length]);
  return (
      <div className="relative">
        <div className='grid min-[768px]:grid-cols-[3.2fr_.8fr] gap-4' ref={casoulRec}>
        <div className="overflow-x-auto relative" style={{ scrollbarWidth : "none",width: `${width}px`,}}>
          <div className="w-max transition-all ease-linear duration-700 " style={{ display: "flex", marginBottom: 24, transform: `translateX(calc(-${slide} * ${width}px))`}}>
            {featured.map((f, i) => (
              <div key={i}  style={{ width: `${width}px`, overflow: "hidden", position: "relative" }}>
                <img className={`h-[420px] max-[768px]:h-[160px]  object-cover opacity-[0.6] rounded-2xl`} src={f.img}  style={{ width: `${width}px`}}/>
                <div style={{ position: "absolute", bottom: 12, left: 12 }}>
                  <div style={{ fontWeight: 600 }}>{f.name}</div>
                  <div style={{ fontSize: 13 }}>₹{f.price}</div>
                </div>
              </div>
            ))}
          </div>
           <ul className="flex gap-2 absolute max-[768px]:bottom-[30px] min-[768px]:bottom-[30px] z-50 w-max -translate-x-1/2" style={{ left : width*0.5 }}>
          {Array.from({length : featured?.length || 0}).map((i,index)=>(
           <li key={index} className={`backdrop-blur-md bg-gray-50 max-[768px]:h-2 max-[768px]:w-2 h-3 w-3 rounded-full ${index!==slide && "opacity-[.5]"}`}></li>
          ))}
          </ul>
          </div>
          <div className=" z-50 grid grid-rows-3 gap-7 max-[768px]:hidden!">
            {featured.map((f, i) => (
              <div key={i} className={` ${i == slide && "border-2 border-white"} p-2 rounded-2xl w-max`} style={{ minWidth: 140, overflow: "hidden", position: "relative" }}>
                <img className="h-[110px] max-[768px]:h-full object-cover opacity-[0.6] rounded-2xl " src={f.img}  />
                <div style={{ position: "absolute", bottom: 12, left: 12 }}>
                  <div style={{ fontWeight: 600 }}>{f.name}</div>
                  {/* <div style={{ fontSize: 13 }}>₹{f.price}</div> */}
                </div>
              </div>
            ))}
          </div>
          </div>
         
            </div>
  )
}

export default Casoul

