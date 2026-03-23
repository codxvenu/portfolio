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
     <Posts postz={[Project[0]]}/>
  </HighlightCard>

  <HighlightCard>
    <Posts postz={[Project[1]]}/>
  </HighlightCard>

</HighlightsSection>
     
    </div>
  )
}

export default Search
