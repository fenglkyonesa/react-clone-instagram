import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@nextui-org/react";
import Home from "../../assets/navlogo/home.png";
import Search from "../../assets/navlogo/search.png";
import Explore from "../../assets/navlogo/explore.png";
import Reels from "../../assets/navlogo/reel.png";
import Message from "../../assets/navlogo/message.png";
import Create from "../../assets/navlogo/create.png";
export const BottomNav = () => {
  const buttons = [
    {
      src: Home,
      link: "/",
      alt: "Home",
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
      src: Create,
      link: "create",
      alt: "Create",
    },

    {
      src: Message,
      link: "messages",
      alt: "Messages",
    },
  ];

  return (
    <>
      {buttons.map((button, key) => {
        return (
          <Link
            to={key === 0 ? "/" : `/${button.link}`}
            key={key}
            className="flex w-2/12 items-center justify-center  border-gray-800 cursor-pointer hover:-translate-y-1 transition-all duration-300"
          >
            <img src={button.src} alt={button.alt} className="w-[30px] "></img>
          </Link>
        );
      })}
      <Link
        to={"/"}
        className="flex items-center justify-center  border-gray-800 cursor-pointer hover:-translate-y-1 transition-all duration-300"
      >
        <Avatar
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </Link>
    </>
  );
};
