import React from "react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar } from "@nextui-org/react";
export const SideNav = () => {
  const buttons = [
    {
      src: "../public/navlogo/home.png",
      link: "/",
      alt: "Home",
    },
    {
      src: "../public/navlogo/search.png",
      link: "search",
      alt: "Search",
    },
    {
      src: "../public/navlogo/explore.png",
      link: "explore",
      alt: "Explore",
    },
    {
      src: "../public/navlogo/reel.png",
      link: "reel",
      alt: "Reels",
    },
    {
      src: "../public/navlogo/message.png",
      link: "message",
      alt: "Message",
    },

    {
      src: "../public/navlogo/like.png",
      link: "notifications",
      alt: "Notifications",
    },
    {
      src: "../public/navlogo/create.png",
      link: "create",
      alt: "Create",
    },
  ];
  return (
    <div className="flex-col flex w-full  pl-4">
      <img
        src="../public/logo.png"
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
          <img
            src={button.src}
            alt="link"
            className="w-7 "

          />
          <span className="font-bold text-lg  hidden lg:block">{button.alt}</span>
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
          src={"../public/navlogo/more.png"}
          alt={"more"}
          className="w-7 "
        ></img>
        <span className="font-bold text-lg  hidden lg:block">more</span>
      </button>
    </div>
  );
};
