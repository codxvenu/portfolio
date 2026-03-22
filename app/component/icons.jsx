
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
export const Grok = ({className})=>{
 return <svg
      viewBox="0 0 33 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544zm-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466z" />
    </svg>
}
export const GithubIcon = ({ className,onClick }) => (
  <svg viewBox="0 0 24 24" className={className} onClick={onClick} fill="currentColor">
    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.22 1.83 1.22 1.07 1.8 2.8 1.28 3.48.98.11-.77.42-1.28.76-1.58-2.67-.3-5.47-1.32-5.47-5.86 0-1.3.47-2.37 1.22-3.21-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.65.24 2.87.12 3.17.76.84 1.22 1.9 1.22 3.21 0 4.55-2.8 5.55-5.48 5.85.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/>
  </svg>
);
export const LinkedinIcon = ({ className,onClick  }) => (
  <svg viewBox="0 0 24 24" className={className} onClick={onClick} fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.78 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.48V22H8V8z"/>
  </svg>
);
export const TwitterIcon = ({ className,onClick  }) => (
  <svg viewBox="0 0 24 24" className={className} onClick={onClick} fill="currentColor">
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-5.35-6.99L3.7 22H1l6.97-7.97L2 2h6.9l4.83 6.4L18.244 2zm-2.394 18h1.885L8.002 3.88H6.06L15.85 20z"/>
  </svg>
);
export const MailIcon = ({ className,onClick  }) => (
  <svg 
  onClick={onClick}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
export const Home = ({ className }) => (
    <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3z" />
          </svg>
);
export const Search = ({ className }) => (
    <svg
      className={className}
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
);
export const Bell = ({ className }) => (
     <svg
     className={className}
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
);
export const Mail = ({ className }) => (
      <svg
       className={className}
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
);