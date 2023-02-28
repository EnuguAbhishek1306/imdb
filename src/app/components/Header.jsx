import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    <div className="flex justify-between items-center mx-3 max-w-6xl sm:mx-auto  my-6">
      <div className="flex flex-row items-center">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch/>
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 px-2 py-1 rounded-lg">IMDb</span>
            <span className="hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
