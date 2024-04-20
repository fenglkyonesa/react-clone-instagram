import React from "react";

import { Avatar } from "@nextui-org/react";
import { CardUser } from "../card/CardUser";
export const Suggestion = () =>  {
  const suggestionUsers = [
    {
      id: 1,
      name: "fengfang",
      username: "feng",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    },
    {
      id: 2,
      name: "lysdsd",
      username: "felysdsdng",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    },
    {
      id: 3,
      name: "jaychou",
      username: "jaychou",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
    },
    {
      id: 4,
      name: "zxczxccx",
      username: "zxczxccx",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
    },
    {
      id: 5,
      name: "yzgzyzgz",
      username: "yzgzyzgz",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
    },
  ];
  return (
    <>
      <div className="flex max-w-[280px] justify-between items-center ">
        <div className="flex  items-center gap-3">
          <Avatar src="https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png" />
          <div className="flex flex-col">
            <h1 className="text-white  font-bold">feng</h1>
            <h1 className="text-gray-400 ">fenglky</h1>
          </div>
        </div>
        <button className="text-blue-400 hover:text-white font-bold text-[15px]">
          Swtich
        </button>
      </div>
      <div className="flex max-w-[280px] justify-between pt-4 pb-4">
        <h1 className="text-gray-400 font-bold text-[15px]">
          Suggested for you
        </h1>
        <h1 className="text-white hover:text-gray-400 font-bold text-[14px] cursor-pointer">
          See All
        </h1>
      </div>

      {suggestionUsers.map((user) => (
        <>
          <div className="flex justify-between items-center pb-2 max-w-[280px] ">
            <div className="flex items-center gap-3">
              <CardUser
                name={user.name}
                username={user.username}
                img={user.img}
              >
                <Avatar src={user.img} />
              </CardUser>
              <div>
                <h1 className="text-white  font-bold">{user.name}</h1>
                <h1 className="text-gray-400 ">New to Instagram</h1>
              </div>
            </div>
            <button className="text-blue-400 hover:text-white font-bold text-[15px]">
              Follow
            </button>
          </div>
        </>
      ))}

      <div className="pt-8  max-w-[280px] text-sm font-bold text-gray-500">
        <div className="">
          About Help Press API Jobs Privacy Terms Locations Language Meta
          Verified
        </div>
        <div className=" mt-4">© 2024 INSTAGRAM FROM META</div>
      </div>
    </>
  );
}
