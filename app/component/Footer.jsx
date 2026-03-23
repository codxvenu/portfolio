import {
  Bell,
  Grok,
  Home,
  Mail,
  Search,
} from "@/app/component/icons";
const Footer = () => {
  return (
     <div className="fixed bottom-0 w-full max-w-md bg-black border-t border-neutral-800 flex justify-around py-3">
          <Home />
          <Search />
          <Grok className={" w-[26px] h-[26px]"} />
          <Bell />
          <Mail />
        </div>
  )
}

export default Footer
