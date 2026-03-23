import {
  Bell,
  Grok,
  Home,
  Mail,
  Search,
} from "@/app/component/icons";
import Link from "next/link";
const Footer = () => {
  return (
     <div className="fixed bottom-0 w-full max-w-md bg-black border-t border-neutral-800 flex justify-around py-3 cursor-pointer">
        <Link href={"/"}>
         <Home />
        </Link> 
        <Link href={"/search"}>
          <Search />
        </Link> 
        <Link href={"/contact"}>
          <Grok className={" w-[26px] h-[26px]"} />
        </Link> 
          <Link href={"/search"}>
          <Bell />
          </Link>
          <Link href={"/contact"}>
          <Mail />
          </Link>
        </div>
  )
}

export default Footer
