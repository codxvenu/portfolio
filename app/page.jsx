"use client";

import {
  ChevronLeft,
  ChevronRight,
  Intro,
  Projects,
  Qoute,
  Stack,
} from "@/app/component/icons";
import { useEffect, useState } from "react";

export default function XMobileExactClonePortfolio() {
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

  const projects = [
    {
      Icon: <Intro />, // later we create Architecture icon
      category: "Architecture",
      username: "@eaf_striker",
      time: "2d",
      title: "Hybrid Streaming Architecture",
      text: "System designed to offload heavy processing from mobile → PC while maintaining realtime interaction. Focused on low latency, stable streaming and accurate touch injection.",
      image: true,
      bullets: [
        "Mobile → Touch capture overlay",
        "WebSocket → realtime event transport",
        "Rust server → input processing",
        "HID layer → native system injection",
        "Sunshine → video/audio stream",
      ],
    },
    {
      Icon: <Intro />,
      category: "Challenge",
      username: "@eaf_striker",
      time: "2d",
      title: "Synthetic Input Blocked by Emulator",
      text: "Gameloop blocked standard simulated inputs causing major delay and unreliable control mapping. Needed deeper system-level injection strategy.",
      bullets: [
        "Mouse simulation detected as non-native",
        "Touch mapping caused inconsistent aim",
        "High input latency in fast gameplay",
        "Standard automation APIs failed",
      ],
      solution:
        "Solved using virtual HID injection layer + interception driver to mimic real hardware signals.",
    },
    {
      Icon: <Intro />,
      category: "Optimization",
      username: "@eaf_striker",
      time: "2d",
      title: "Latency Optimization Pipeline",
      text: "Initial prototype had noticeable delay during fast touch interactions. Focused on reducing end-to-end input + streaming latency.",
      bullets: [
        "Reduced event serialization overhead",
        "Optimized WebSocket packet batching",
        "Improved Rust event processing loop",
        "Minimized video buffer delay",
        "Achieved stable 60+ FPS streaming",
      ],
      result:
        "Overall latency reduced by ~40% making gameplay feel near-native.",
    },
  ];
  const posts = [
    {
      Icon: <Intro />,
      category: "Introduction",
      username: "@VenuSharma",
      time: "Now",
      text: "Full-stack JavaScript developer focused on building scalable web applications using React, Next.js, Node.js, and MySQL. Experienced in secure authentication, real-time systems, and AI integrations. Passionate about performance, clean architecture, and practical problem-solving.",
      image: true,
    },
    {
      Icon: <Stack />,
      category: "Stack",
      username: "@Stack",
      time: "Now",
      skills: {
        frontend: "https://dzdw2zccyu2wu.cloudfront.net/overview/Frontend.svg",

        backend: "https://dzdw2zccyu2wu.cloudfront.net/overview/Backend.svg",

        tools: "https://dzdw2zccyu2wu.cloudfront.net/overview/Tools&DevOps.svg",

        cloud:
          "https://dzdw2zccyu2wu.cloudfront.net/overview/Cloud&Integration.svg",
      },
    },
    {
      Icon: <Projects />,
      category: "Projects",
      username: "@Projects",
      time: "2d",
      threadOf: "Engineering Projects",
      text: "A breakdown of systems I have designed and built... Tap to explore architecture, challenges and optimizations.",
      replies: 6,
      posts: projects,
    },
    {
  Icon: <Qoute />,
  category: "Quote",
  username: "@eaf_striker",
  time: "Now",
  text: "Engineering is not just about writing code.\nIt is about designing systems that survive scale.",
  quote: {
    author: "Venu Sharma",
    handle: "@eaf_striker",
    content: "Built with curiosity, systems thinking and relentless iteration."
  },
  footer: "© 2026 Venu Sharma · All rights reserved"
}
  ];

  const [post, setPost] = useState(posts);
  const [activeThread, setActiveThread] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen flex justify-center max-h-max mb-12">
      <div className="w-full max-w-md border-x border-neutral-900 relative">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-2 ">
          {activeThread ? (
            <ChevronRight className="-ml-2 cursor-pointer" onClick={()=>{
              setActiveThread(false);
              setPost(posts);
            }}/>
          ) : (
            <img
              src={
                "https://media.licdn.com/dms/image/v2/D4D35AQFsdfn3BZTJtQ/profile-framedphoto-shrink_100_100/B4DZfOW.sMGgAk-/0/1751513820200?e=1774677600&v=beta&t=U1ElobQjPiSU8qj4u59F4TXGAEAFPBDP2xXWroIAIiw"
              }
              className="w-8 h-8 rounded-full bg-neutral-700"
            />
          )}
          <div className="text-xl font-bold">
            {activeThread ? activeThread : "Port-Folio"}
          </div>
          <div className="text-white font-semibold"></div>
        </div>
        {/* Tabs */}
        {!activeThread && (
          <div className="flex border-b border-neutral-800 text-sm">
            <div className="flex-1 text-center py-3 border-b-2 border-sky-500 font-semibold">
              Highlights
            </div>
            <div className="flex-1 text-center py-3 text-neutral-500">
              Stack
            </div>
          </div>
        )}
        {activeThread && (
          <div className="px-4 py-2 text-xs text-neutral-500 border-b border-neutral-800">
            {activeThread} thread
          </div>
        )}
        {/* Feed */}
        {!!post?.length &&
          post.map((post, i) => (
            <div
              key={i}
              className={activeThread ? "flex gap-3 px-4 py-3 mb-4" : "flex gap-3 px-4 py-3 border-b border-neutral-800"}
            >
              <div className="relative flex">
              {!!post?.Icon && post.Icon}
               {activeThread && i !== posts.length - 1 && (
         <div className="absolute left-1/2 top-10 bottom-10 w-[2px] h-[95%] bg-neutral-800 -translate-x-1/2" />
      )}
              </div>
              
              <div className="flex-1"> 
                
                <div className="flex gap-2 items-center text-sm">
                  <span className="font-bold">{post.category}</span>
                  <span className="text-neutral-500">{post.username}</span>
                  <span className="text-neutral-500">· {post.time}</span>
                </div>

                {post.text && (
                  <div className="mt-1 text-[15px] leading-5 font-normal">
                    {post.text}
                  </div>
                )}
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
                {post.image && (
                  <div className="mt-3 h-48 bg-neutral-800 rounded-2xl" />
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
{post.footer && (
  <div className="mt-3 text-xs text-neutral-500">
    {post.footer}
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
                        <img src={post.skills[section]} alt="" />
                      </div>
                    ))}
                  </div>
                )}

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

        {/* Floating Button */}
        {/* <div className="fixed bottom-20 right-6 w-14 h-14 rounded-full bg-sky-500 flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M12 5v14M5 12h14"/></svg>
        </div> */}
        
        {/* Bottom Nav */}
        <div className="fixed bottom-0 w-full max-w-md bg-black border-t border-neutral-800 flex justify-around py-3">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3z" />
          </svg>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 4l16 16" />
            <path d="M20 4L4 20" />
          </svg>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
