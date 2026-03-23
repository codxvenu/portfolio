"use client"
import React, { useEffect, useRef, useState } from 'react'
import { IconComment, IconLike, IconRetweet, IconShare, IconViews } from './icons'
import { useRouter } from 'next/navigation';



const Casoul = ({postz,activeThread = false , action=true}) => {
   const router = useRouter();
   
  return (
      <>
       {!!postz?.length &&
          postz.map((post, i) => (
            <div
              key={i}
              className={activeThread ? "flex gap-3 px-4 py-3 mb-4 " : " flex gap-3 px-4 py-3 border-b border-neutral-800"}
            >
              <div className="relative flex">
              {post.Icon}
               {activeThread && i !== postz.length - 1 && (
         <div className="absolute left-1/2 top-10 bottom-10 w-[2px] h-[95%] bg-neutral-800 -translate-x-1/2" />
      )}
              </div>
              
              <div className="flex-1"> 
                
               {post.category && <div className="flex gap-2 items-center text-sm">
                  <span className="font-bold">{post.category}</span>
                  <span className="text-neutral-500">{post.username}</span>
                  <span className="text-neutral-500">· {post.time}</span>
                </div>}

             
                
                {post.result && (
                  <div className="mt-3 text-[13px] text-neutral-300">
                    <span className="font-semibold text-neutral-200">
                      Result →{" "}
                    </span>
                    {post.result}
                  </div>
                )}
                {post.solution && (
                  <div className="mt-3 text-[13px] text-neutral-300">
                    <span className="font-semibold text-neutral-200">
                      Solution →{" "}
                    </span>
                    {post.solution}
                  </div>
                )}
               {post.bullets && (
                  <div className="mt-3 space-y-1">
                    {post.bullets.map((b, i) => (
                      <div key={i} className="text-[13px] text-neutral-400">
                        • {b}
                      </div>
                    ))}
                  </div>
                )}
                {post.image && (
                  <img className="mt-3 h-48 bg-neutral-800 rounded-2xl w-full object-cover" src={`/${post.image}`} />
                )}
                {post.threadOf && (
                  <div className="mt-3 border border-neutral-800 rounded-xl p-3">
                    <div className="text-[13px] text-neutral-400">Thread</div>
                    <div
                      className="font-semibold text-[14px] mt-1 cursor-pointer"
                      onClick={() => router.push(window.location.href+"/"+post?.threadTitle,{scroll : true})}
                    >
                      {post.threadOf}
                    </div>
                    <div className="text-[12px] text-neutral-500 mt-1">
                      {/* {post.replies} replies */} Click to see more
                    </div>
                  </div>
                )}
                {post.title && (
                  <div className="mt-2 font-semibold text-[15px]">
                    {post.title}
                  </div>
                )}

                {post.metrics && (
                  <div className="mt-3 space-y-1">
                    {post.metrics.map((m, i) => (
                      <div key={i} className="text-[13px] text-neutral-400">
                        • {m}
                      </div>
                    ))}
                  </div>
                )}
                
                {post.skills && (
                  <div className="mt-3 space-y-3">
                    {Object.entries(post.skills).map(([section, items]) => (
                      <div key={section}>
                        <div className="text-xs text-neutral-500 mb-2 capitalize ">
                          {section === "tools"
                            ? "Tools & DevOps"
                            : section === "cloud"
                              ? "Cloud & Integrations"
                              : section}
                        </div>
                       {post.skills[section]&& <img src={post.skills[section]} alt="" />
                       }
                      </div>
                    ))}
                  </div>
                )}
                {post.bulletsIcon && (
                  <div className="mt-3 space-y-1">
                    {post.bulletsIcon.map((b, i) => (
                      <div key={i} className="text-[13px] text-neutral-400 flex items-center gap-2 cursor-pointer" onClick={()=>window.open(b.url)}>
                        {b.icon} 
                        <h2 className='w-[30vw] block truncate min-w-0'>
                        {b.text}
                        </h2>
                      </div>
                    ))}
                  </div>
                )}
                   {post.text && (
                  <div className="mt-1 text-[15px] leading-5 font-normal whitespace-pre-line">
                    {post.text}
                  </div>
                )}
{post.quote && (
  <div className="mt-3 border border-neutral-800 rounded-2xl p-3">
 {post.quote.author && <div className="text-sm font-semibold">
      {post.quote.author}
      <span className="text-neutral-500 font-normal ml-2">
        {post.quote.handle}
      </span>
    </div>}

    <div className="text-[14px] mt-1 text-neutral-300 whitespace-pre-line">
      {post.quote.content}
    </div>
  </div>
)}
{post.conclusion && <div className="text-[14px] mt-3 text-neutral-400">
      {post.conclusion.content}
    </div>
    }

                {/* Actions */}
               <div className="flex justify-between mt-3 text-neutral-500 text-sm max-w-sm">
                  {post.actionAllowed && action  && <>
                    <IconComment />
                    <IconRetweet />
                    <IconLike />
                    <IconViews />
                    <IconShare />
                  </>
                  }
                </div>
                
              </div>
              
            </div>
          ))}
      </>
  )
}

export default Casoul

