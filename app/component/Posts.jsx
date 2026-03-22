"use client"
import React, { useEffect, useRef, useState } from 'react'


 const IconComment = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );

  const IconRetweet = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );

  const IconLike = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );

  const IconViews = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );

  const IconShare = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.7 13.4l6.6 3.2M15.3 7.4L8.7 10.6" />
    </svg>
  );


const Casoul = ({post,activeThread,setActiveThread }) => {
  return (
      <>
       {!!post?.length &&
          post.map((post, i) => (
            <div
              key={i}
              className={activeThread ? "flex gap-3 px-4 py-3 mb-4" : "flex gap-3 px-4 py-3 border-b border-neutral-800"}
            >
              <div className="relative flex">
              {!!post?.Icon && post.Icon}
               {activeThread && i !== post.length - 1 && (
         <div className="absolute left-1/2 top-10 bottom-10 w-[2px] h-[95%] bg-neutral-800 -translate-x-1/2" />
      )}
              </div>
              
              <div className="flex-1"> 
                
               {post.category && <div className="flex gap-2 items-center text-sm">
                  <span className="font-bold">{post.category}</span>
                  <span className="text-neutral-500">{post.username}</span>
                  <span className="text-neutral-500">· {post.time}</span>
                </div>}

             
                {post.threadOf && (
                  <div className="mt-3 border border-neutral-800 rounded-xl p-3">
                    <div className="text-[13px] text-neutral-400">Thread</div>
                    <div
                      className="font-semibold text-[14px] mt-1 cursor-pointer"
                      onClick={() => {
                        setActiveThread("Project");
                        setPost(post.posts);
                      }}
                    >
                      {post.threadOf}
                    </div>
                    <div className="text-[12px] text-neutral-500 mt-1">
                      {post.replies} replies
                    </div>
                  </div>
                )}
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
                {/* {post.image && (
                  <img className="mt-3 h-48 bg-neutral-800 rounded-2xl w-full object-cover" src={"/prof.png"} />
                )} */}
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
                       {post.skills[section]&& <img src={post.skills[section]} alt="" />}
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
  <div className="text-sm font-semibold">
      {post.quote.author}
      <span className="text-neutral-500 font-normal ml-2">
        {post.quote.handle}
      </span>
    </div>

    <div className="text-[14px] mt-1 text-neutral-300">
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
                  {!activeThread && !post.footer && !post.skills &&!post.threadOf && <>
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

