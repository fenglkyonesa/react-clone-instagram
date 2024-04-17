import React from "react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar } from "@nextui-org/react";
import InsLogo from "../../assets/logo/instagram.png";
import Home from "../../assets/navlogo/home.png";
import Search from "../../assets/navlogo/search.png";
import Explore from "../../assets/navlogo/explore.png";
import Reels from "../../assets/navlogo/reel.png";
import Message from "../../assets/navlogo/message.png";
import Notifications from "../../assets/navlogo/like.png";
import Create from "../../assets/navlogo/create.png";
import More from "../../assets/navlogo/more.png";
export const SideNav = () => {
  const buttons = [
    {
      src: Home,
      link: "/",
      alt: "Home",
    },
    {
      src: Search,
      link: "search",
      alt: "Search",
    },
    {
      src: Explore,
      link: "explore",
      alt: "Explore",
    },
    {
      src: Reels,
      link: "reels",
      alt: "Reels",
    },
    {
      src: Message,
      link: "messages",
      alt: "Messages",
    },

    {
      src: Notifications,
      link: "notifications",
      alt: "Notifications",
    },
    {
      src: Create,
      link: "create",
      alt: "Create",
    },
  ];
  return (
    <div className="flex-col flex w-full  pl-4">
      <img
        src={InsLogo}
        alt="logo"
        className="cursor-pointer w-[150px] pt-10 mb-10 hidden lg:block"
      />
      <Instagram className="cursor-pointer w-[32px] mb-10 pt-10 block lg:hidden hover:-translate-y-1 transition-all duration-300" />

      {buttons.map((button, key) => {
        return (
          <Link
            key={key}
            to={button.link}
            className="gap-3  lg:w-[300px] h-12 mb-3 cursor-pointer flex justify-start items-center lg:rounded-md lg:hover:bg-zinc-800 hover:-translate-y-1 transition-all duration-300"
          >
            <img src={button.src} alt="link" className="w-7 " />
            <span className="font-bold text-lg  hidden lg:block">
              {button.alt}
            </span>
          </Link>
        );
      })}

      <Link
        to={"/profile"}
        className="gap-3  lg:w-[300px] h-12 mb-3 cursor-pointer flex justify-start items-center lg:rounded-md lg:hover:bg-zinc-800 hover:-translate-y-1 transition-all duration-300"
      >
        <Avatar
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <span className="font-bold text-lg  hidden lg:block">Profile</span>
      </Link>

      <button className="gap-3  lg:w-[300px] h-12 mb-3 cursor-pointer flex fixed bottom-0 justify-start items-center lg:rounded-md lg:hover:bg-zinc-800 hover:-translate-y-1 transition-all duration-300 ">
        <img
          src={More}
          alt={"more"}
          className="w-7 "
        ></img>
        <span className="font-bold text-lg  hidden lg:block">more</span>
      </button>
    </div>
  );
};
