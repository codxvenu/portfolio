"use client";
import Posts from "@/app/component/Posts"
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Footer,
  GithubIcon,
  Grok,
  Home,
  Intro,
  LinkedinIcon,
  Mail,
  MailIcon,
  Projects,
  Qoute,
  Search,
  Stack,
  TwitterIcon,
} from "@/app/component/icons";
import { useEffect, useState } from "react";

export default function XMobileExactClonePortfolio() {
 
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
      skills: {
        "Full-stack JavaScript Engineer": ""},
      text: `• React / Next / Node systems
• Secure authentication architectures
• Performance-focused builds
• AI integration workflows`,
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
      conclusion: {
    content: "Always exploring better tools, patterns, and systems."
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
  username: "@Quote",
  time: "Now",
  text: "",
  quote: {
    author: "Cory House",
    handle: "@CoryHouse",
    content: "Code is like humor. When you have to explain it, it’s bad."
  },
   footer: true
},
// {
//   Icon: <Footer />,
//   category: "Footer",
//   username: "@footer",
//   time: "Now",
//   text: "",
//    footer: "Built with passion and purpose in Mumbai, India",
//    socials : {
//     linkedIn : "",
//     x : "",
//     mail : "",
//    }
// }
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
            {activeThread ? activeThread : "Venu Sharma"}
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
              Tools
            </div>
          </div>
        )}
        {activeThread && (
          <div className="px-4 py-2 text-xs text-neutral-500 border-b border-neutral-800">
            {activeThread} thread
          </div>
        )}
        <Posts post={post} activeThread={activeThread} setActiveThread={setActiveThread} setPost={setPost}/>
      <div className="flex justify-center gap-6 text-neutral-500 p-3 n">
  <GithubIcon className="w-5 h-5 hover:text-white transition cursor-pointer" onClick={()=>window.open("https://github.com/codxvenu/")}/>
  <LinkedinIcon className="w-5 h-5 hover:text-white transition cursor-pointer" onClick={()=>window.open("https://www.linkedin.com/in/venu-sharma-19628328a/")}/>
  <TwitterIcon className="w-5 h-5 hover:text-white transition cursor-pointer" onClick={()=>window.open("https://x.com/codx_venu")}/>
  <MailIcon className="w-6 h-6 hover:text-white transition cursor-pointer" onClick={()=>window.open("mailto:vasulallu09@gmail.com")}/>
</div>
         <div className="py-2 px-2 text-center text-neutral-600 text-sm">
  Built with intent, systems thinking and late night debugging.
  <div className="mt-2 text-neutral-700">
    Mumbai, India
  </div>
</div>
        {/* Bottom Nav */}
        <div className="fixed bottom-0 w-full max-w-md bg-black border-t border-neutral-800 flex justify-around py-3">
        <Home/>
         <Search/>
          <Grok className={" w-[26px] h-[26px]"}/>
         <Bell/>
         <Mail/>
         
        
        </div>
      </div>
    </div>
  );
}
