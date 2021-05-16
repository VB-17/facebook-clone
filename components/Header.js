import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <h1 className="text-red">Header</h1>
      {/* Left */}
      <div>
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}

      <div className="flex flex-grow justify-center ">
        <div>
          <HeaderIcon Icon={HomeIcon} />
        </div>
      </div>
      {/* Right */}
    </div>
  );
}

export default Header;
