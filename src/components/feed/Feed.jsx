import React from "react";
import { Avatar } from "@nextui-org/react";
import { CardUser } from "../card/CardUser";
export const Feed = () => {
  const followNum = 10;
  const suggestionUsers = [
    {
      id: 1,
      name: "fengfang",
      username: "feng",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    },
    {
      id: 2,
      name: "lysdsd",
      username: "felysdsdng",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    },
    {
      id: 3,
      name: "jaychou",
      username: "jaychou",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
    },
    {
      id: 4,
      name: "zxczxccx",
      username: "zxczxccx",
      suggestion: "New to Instagram",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
    },
    {
      id: 5,
      name: "yzgzyzgz",
      username: "yzgzyzgz",
      suggestion: "New to Instagram",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
    },
    {
      id: 6,
      name: "fengfang",
      username: "feng",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    },
    {
      id: 7,
      name: "lysdsd",
      username: "felysdsdng",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    },
    {
      id: 8,
      name: "jaychou",
      username: "jaychou",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
    },
    {
      id: 9,
      name: "zxczxccx",
      username: "zxczxccx",
      suggestion: "New to Instagram",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
    },
    {
      id: 10,
      name: "yzgzyzgz",
      username: "yzgzyzgz",
      suggestion: "New to Instagram",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
    },
    {
      id: 11,
      name: "fengfang",
      username: "feng",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    },
    {
      id: 12,
      name: "lysdsd",
      username: "felysdsdng",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    },
    {
      id: 13,
      name: "jaychou",
      username: "jaychou",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
    },
    {
      id: 14,
      name: "zxczxccx",
      username: "zxczxccx",
      suggestion: "New to Instagram",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
    },
    {
      id: 15,
      name: "yzgzyzgz",
      username: "yzgzyzgz",
      suggestion: "New to Instagram",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
    },
    {
      id: 16,
      name: "fengfang",
      username: "feng",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    },
    {
      id: 17,
      name: "lysdsd",
      username: "felysdsdng",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
    },
    {
      id: 18,
      name: "jaychou",
      username: "jaychou",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
    },
    {
      id: 19,
      name: "zxczxccx",
      username: "zxczxccx",
      suggestion: "New to Instagram",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
    },
    {
      id: 20,
      name: "yzgzyzgz",
      username: "yzgzyzgz",
      suggestion: "New to Instagram",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
    },
  ];
  return (
    <>
      {followNum == 0 ? (
        <div className=" max-w-[580px] h-auto flex flex-col justify-center ">
          <h1 className="font-bold font-size:20px mb-3">Suggested for you</h1>
          {suggestionUsers.map((user, key) => (
            <div
              className="w-full flex  justify-between items-center "
              key={key}
            >
              <div className="  flex flex-row w-full gap-1 mt-1 ">
                <CardUser
                  name={user.name}
                  username={user.username}
                  img={user.img}
                >
                  <Avatar
                    src={user.img}
                    className="items-center w-[50px] h-[50px] "
                  />
                </CardUser>

                <div className=" flex flex-col  ml-1  -space-y-2 ">
                  <h1 className="font-bold text-[15px]">{user.name}</h1>
                  <h1 className="text-gray-500 font-semibold text-[16px]">
                    {user.username}
                  </h1>
                  <h1 className="text-gray-500 text-[16px]">
                    {user.suggestion}
                  </h1>
                </div>
              </div>
              <button className="bg-[#0095F6] text-white w-[110px] h-[35px] rounded-md mr-2 cursor-pointer hover:bg-[#007bfc]">
                <h1 className="font-bold text-center text-[16px]">Follow</h1>
              </button>
            </div>
          ))}
          <div className="h-auto flex flex-col w-full  mt-4 mb-10 text-[12px]  items-center justify-center ">
            <h1>
              Meta About Blog Jobs Help API Privacy Terms Locations Instagram
            </h1>
            <h1 className="mb-4">English © 2024 Instagram from Meta</h1>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full h-screen md:items-end items-center  ">
          feed
        </div>
      )}
    </>
  );
};
