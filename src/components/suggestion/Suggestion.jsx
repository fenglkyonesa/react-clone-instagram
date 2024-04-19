import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
export default function Suggestion() {
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
      <div className="flex justify-between items-center">
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
      <div className="flex justify-between pt-4 pb-4">
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
              <Tooltip
                showArrow={true}
                placement="bottom"
                className="dark"
                content={
                  <Card className="w-[390px] dark">
                    <CardHeader className="justify-between">
                      <div className="flex gap-4">
                        <Avatar
                          isBordered
                          radius="full"
                          size="md"
                          src={user.img}
                        />

                        <div className="flex flex-col gap-1 items-start justify-center">
                          <h4 className="font-bold text-[15px]">{user.name}</h4>
                          <h5 className="text-small  text-default-500">
                            {user.username}
                          </h5>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className=" flex  flex-row gap-1 justify-between items-center pb-2  font-bold text-[15px]">
                      <div className="flex items-center flex-col">
                        <p>4</p>
                        <p className="text-small items-center text-default-500">
                          posts
                        </p>
                      </div>
                      <div className="flex items-center flex-col ">
                        <p className="">66k</p>
                        <p className="text-small items-center text-default-500">
                          followers
                        </p>
                      </div>
                      <div className="flex items-center flex-col ">
                        <p className="">97</p>
                        <p className="text-small items-center text-default-500">
                          following
                        </p>
                      </div>
                    </CardBody>
                    <CardBody className="felx flex-row justify-between pb-2">
                      <img
                        src="https://q7.itc.cn/q_70/images03/20240401/0e09d0019732463ba97af4540702e1e4.jpeg"
                        alt="img"
                        className="w-[120px] h-auto  "
                      ></img>
                      <img
                        src="https://q4.itc.cn/q_70/images03/20240329/fc11f2021ac043d29ec7d3b6c2ab0ed2.jpeg"
                        alt="img"
                        className="w-[120px] h-auto "
                      ></img>
                      <img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F63d91094-e046-4337-9de6-7663e58cbfa1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1716116958&t=22c10a50b19431453f6885f457d65a28"
                        alt="img"
                        className="w-[120px] h-auto  "
                      ></img>
                    </CardBody>

                    <CardFooter>
                      <button className=" m-auto w-[350px] h-[40px] border-0 rounded-lg bg-blue-400 text-white font-bold text-[15px] cursor-pointer hover:bg-blue-600">
                        follow
                      </button>
                    </CardFooter>
                  </Card>
                }
              >
                <Avatar src={user.img} />
              </Tooltip>
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
      {/* <div className="flex justify-between items-center pb-2 max-w-[280px] ">
        <div className="flex items-center gap-3">
          <Tooltip
            showArrow={true}
            placement="bottom"
            className="dark"
            content={
              <Card className="w-[390px] dark">
                <CardHeader className="justify-between">
                  <div className="flex gap-4">
                    <Avatar
                      isBordered
                      radius="full"
                      size="md"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    />

                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="font-bold text-[15px]">feng</h4>
                      <h5 className="text-small  text-default-500">feng</h5>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className=" flex  flex-row gap-1 justify-between items-center pb-2  font-bold text-[15px]">
                  <div className="flex items-center flex-col">
                    <p>4</p>
                    <p className="text-small items-center text-default-500">
                      posts
                    </p>
                  </div>
                  <div className="flex items-center flex-col ">
                    <p className="">66k</p>
                    <p className="text-small items-center text-default-500">
                      followers
                    </p>
                  </div>
                  <div className="flex items-center flex-col ">
                    <p className="">97</p>
                    <p className="text-small items-center text-default-500">
                      following
                    </p>
                  </div>
                </CardBody>
                <CardBody className="felx flex-row justify-between pb-2">
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="img"
                    className="w-[120px] h-auto  "
                  ></img>
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="img"
                    className="w-[120px] h-auto "
                  ></img>
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="img"
                    className="w-[120px] h-auto  "
                  ></img>
                </CardBody>

                <CardFooter>
                  <button className=" m-auto w-[350px] h-[40px] border-0 rounded-lg bg-blue-400 text-white font-bold text-[15px] cursor-pointer hover:bg-blue-600">
                    follow
                  </button>
                </CardFooter>
              </Card>
            }
          >
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </Tooltip>
          <div>
            <h1 className="text-white  font-bold">feng</h1>
            <h1 className="text-gray-400 ">New to Instagram</h1>
          </div>
        </div>
        <button className="text-blue-400 hover:text-white font-bold text-[15px]">
          Follow
        </button>
      </div> */}

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
