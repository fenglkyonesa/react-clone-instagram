import React from "react";
import { CardUser } from "../card/CardUser";
import { Ellipsis } from "lucide-react";
import { Image } from "@nextui-org/react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Avatar } from "@nextui-org/react";
import PostImg from "../../assets/post.png";
import { Suggestion } from "../suggestion/Suggestion";
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
  const users = [
    {
      id: 1,
      name: "fengfang",
      username: "feng",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
      post: {
        id: 1,
        img: PostImg,
        caption: "hello world",
        likes: 999,
        comments: 999,
      },
    },
    {
      id: 2,
      name: "lysdsd",
      username: "felysdsdng",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
      post: {
        id: 2,
        img: PostImg,
        caption: "This is a caption",
        likes: 666,
        comments: 666,
      },
    },
    {
      id: 3,
      name: "jaychou",
      username: "jaychou",
      img: PostImg,
      post: {
        id: 3,
        img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        caption: "heloow",
        likes: 9982,
        comments: 7821,
      },
    },
    {
      id: 4,
      name: "zxczxccx",
      username: "zxczxccx",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
      post: {
        id: 4,
        img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        caption: " 但很认真",
        likes: 21,
        comments: 1523,
      },
    },
    {
      id: 5,
      name: "yzgzyzgz",
      username: "yzgzyzgz",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
      post: {
        id: 5,
        img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        caption: "heloow",
        likes: 6667,
        comments: 5555,
      },
    },
    {
      id: 6,
      name: "fengfang",
      username: "feng",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
      post: {
        id: 6,
        img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        caption: "我的爱或许不成熟",
        likes: 541,
        comments: 123,
      },
    },
    {
      id: 7,
      name: "lysdsd",
      username: "felysdsdng",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
      post: {
        id: 7,
        img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        caption: " 但很认真",
        likes: 432,
        comments: 55,
      },
    },
    {
      id: 8,
      name: "jaychou",
      username: "jaychou",
      suggestion: "follows you",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
      post: {
        id: 8,
        img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        caption: "相似的人太多",
        likes: 5421,
        comments: 11523,
      },
    },
    {
      id: 9,
      name: "zxczxccx",
      username: "zxczxccx",
      img: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
      post: {
        id: 9,
        img: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        caption: "我也做不到太特别",
        likes: 512,
        comments: 678,
      },
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
        <>
          <div className="feed w-full h-screen flex justify-center mt-3 gap-10  ">
            <div className="feed_left w-[450px] h-screen  ">
              {users.map((user, key) => (
                <>
                  <div className="feed_header flex flex-row justify-between items-center">
                    <div className="feed_header_left flex flex-row gap-3 items-center">
                      <CardUser
                        name={user.name}
                        username={user.username}
                        img={user.img}
                      ></CardUser>
                      <span className="font-bold text-[15px]">{user.name}</span>
                      <span className="text-gray-400 font-semibold text-[15px]">
                        •
                      </span>
                      <span className="text-gray-400 font-semibold text-[15px]">
                        1周
                      </span>
                    </div>
                    <div className="feed_header_right">
                      <Ellipsis className="cursor-pointer" />
                    </div>
                  </div>
                  <div className="feed_main w-full mt-5">
                    <Image
                      isZoomed
                      radius="sm"
                      alt="NextUI Fruit Image with Zoom"
                      src={user.post.img}
                      fallbackSrc="https://via.placeholder.com/300x200"
                    />
                  </div>
                  <div className="feed_footer flex flex-row justify-between items-center mt-3 cursor-pointer">
                    <div className="feed_footer_left flex flex-row gap-3 items-center   ">
                      <Heart
                        size={28}
                        className="hover:-translate-y-1 transition-all duration-300"
                      />
                      <MessageCircle
                        size={28}
                        className="hover:-translate-y-1 transition-all duration-300"
                      />
                      <Send
                        size={28}
                        className="hover:-translate-y-1 transition-all duration-300"
                      />
                    </div>
                    <div className="feed_footer_right  hover:-translate-y-1 transition-all duration-300 ">
                      <Bookmark size={28} />
                    </div>
                  </div>
                  <div className="feed_comment flex flex-col w-full mt-3">
                    <div className="feed_comment_like font-bold text-[15px]">
                      {user.post.likes}次点赞
                    </div>
                    <div className="feed_comment_title">
                      <button className="font-bold text-[15px] pr-1">
                        {user.name}
                      </button>
                      <span className=" font-semibold text-[15px]">
                        {user.post.caption}
                      </span>
                    </div>
                    <div className="feed_comment_count">
                      <button className="text-[15px] font-semibold text-gray-400">
                        全部{user.post.comments} 条评论
                      </button>
                    </div>
                    <div className="feed_comment_first flex flex-row items-center justify-between ">
                      <div className="feed_comment_first_left flex flex-row gap-1 items-center ">
                        <span className="font-bold text-[15px]">username</span>
                        <span className="font-semibold text-[15px]">
                          演唱会!!!!
                        </span>
                      </div>
                      <div className="feed_comment_first_right">
                        <Heart
                          size={15}
                          className="hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className=" flex mt-3 mb-4 dashed border-gray-500 " />
                </>
              ))}
            </div>

            <div className="feed_right hidden md:block ">
              <Suggestion />
            </div>
          </div>
        </>
      )}
    </>
  );
};
