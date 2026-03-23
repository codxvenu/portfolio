"use client"
import Posts from "@/app/component/Posts"
import { useEffect, useState } from "react"
import HighlightsSection, { HighlightCard, HighlightsIntro } from "../component/searchM"
import SearchHeader from "../component/headers/SearchHeader"
import {posts} from "@/app/Constants"
const Search = () => {
  const [post,setPost] = useState([]);
  const [query,setQuery] = useState("");
  useEffect(()=>{
    if(!query) {
      setPost(posts.filter(i=> i.pinned)); 
      return
    }
    setPost(posts.filter((i)=>
    (i?.title?.toLowerCase()?.includes(query) || i?.username?.toLowerCase()?.includes(query)) && 
    !i.threadId 
    ))
  },[query])
  return (
    <div>
      <SearchHeader setQuery={setQuery} />
     <HighlightsSection>
  <HighlightsIntro />

<<<<<<< HEAD
     <Posts postz={post} action={false}/>
=======
  <HighlightCard>
  
  </HighlightCard>

  <HighlightCard>

  </HighlightCard>
>>>>>>> c1baefe1f6e09d2646c8333e0c2b0e33e481e543

</HighlightsSection>
     
    </div>
  )
}

export default Search
