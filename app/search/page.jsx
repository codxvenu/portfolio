"use client"
import Posts from "@/app/component/Posts"
import { useState } from "react"
import HighlightsSection, { HighlightCard, HighlightsIntro } from "../component/searchM"
import SearchHeader from "../component/headers/SearchHeader"
const Search = () => {
  const [post,setPost] = useState([]);
  return (
    <div>
      <SearchHeader/>
     <HighlightsSection>
  <HighlightsIntro />

  <HighlightCard>
  
  </HighlightCard>

  <HighlightCard>

  </HighlightCard>

</HighlightsSection>
     
    </div>
  )
}

export default Search
