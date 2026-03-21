
export const Intro = ({className})=>(
   <svg 
  width="28" 
  height="28" 
  viewBox="0 0 24 24" 
  fill="none" 
  className={className}
  xmlns="http://www.w3.org/2000/svg"
>
  {/* <rect width="24" height="24" rx="8" fill="#404040"/>  */}
  <circle cx="12" cy="9" r="3" stroke="white" strokeWidth="1.5"/>
  <path 
    d="M6.5 17C7.8 14.8 10 14 12 14C14 14 16.2 14.8 17.5 17" 
    stroke="white" 
    strokeWidth="1.5" 
    strokeLinecap="round"
  />
  <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
</svg>
)
export const Stack = ({className})=>(
   <svg 
  width="28" 
  height="28" 
  viewBox="0 0 24 24" 
  className={className}
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  {/* <rect width="24" height="24" rx="8" fill="#404040"/> */}

  <rect 
    x="7" 
    y="6" 
    width="10" 
    height="3" 
    rx="1.2" 
    stroke="white" 
    strokeWidth="1.5"
  />

  <rect 
    x="5.5" 
    y="10.5" 
    width="13" 
    height="3" 
    rx="1.2" 
    stroke="white" 
    strokeWidth="1.5"
  />
  <rect 
    x="7" 
    y="15" 
    width="10" 
    height="3" 
    rx="1.2" 
    stroke="white" 
    strokeWidth="1.5"
  />
</svg>
)
export const Projects = ({className})=>(
   <svg 
  width="28" 
  height="28" 
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
   className={className}
>
  {/* <rect width="24" height="24" rx="8" fill="#404040"/> */}

  <rect 
    x="5.5" 
    y="6" 
    width="13" 
    height="10.5" 
    rx="2" 
    stroke="white" 
    strokeWidth="1.5"
  />

  <circle cx="8" cy="8.5" r="0.8" fill="white"/>
  <circle cx="10.5" cy="8.5" r="0.8" fill="white"/>

  <rect x="8" y="11" width="3.5" height="2.5" rx="0.8" fill="white"/>
  <rect x="12.5" y="11" width="3.5" height="2.5" rx="0.8" fill="white"/>
</svg>
)
export const ChevronLeft = ({className})=>(
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
)
export const ChevronRight = ({className,onClick})=>(
  <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className}  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m15 18-6-6 6-6"/></svg>
)
export const Qoute = ({className})=>{
 return <svg 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  className={className}
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    d="M12 5L13.8 10.2L19 12L13.8 13.8L12 19L10.2 13.8L5 12L10.2 10.2L12 5Z" 
    stroke="white" 
    strokeWidth="1.4" 
    strokeLinejoin="round"
  />
</svg>
}