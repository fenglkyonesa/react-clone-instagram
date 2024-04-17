import React from "react";
import { Link } from "react-router-dom";
import {Avatar} from "@nextui-org/react";
export const BottomNav = () => {
  const buttons = [
    {
      src: "../public/navlogo/home.png",
      link: "/",
      alt: "home1",
    },
    {
      src: "../public/navlogo/explore.png",
      link: "explore",
      alt: "explore",
    },
    {
      src: "../public/navlogo/reel.png",
      link: "reel",
      alt: "reel",
    },
    {
      src: "../public/navlogo/create.png",
      link: "create",
      alt: "create",
    },
    {
      src: "../public/navlogo/message.png",
      link: "message",
      alt: "message",
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
            <img 
            src={button.src} 
            alt={button.alt} 
            className="w-[30px] ">
            </img>
          </Link>
        );
      })}
        <Link
            to={"/"}
            className="flex items-center justify-center  border-gray-800 cursor-pointer hover:-translate-y-1 transition-all duration-300"
          >
                  <Avatar
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

          </Link>
    </>
  );
};
