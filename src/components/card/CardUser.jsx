import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";

export const CardUser = ({ name, username, img }) => {
  return (
    <Tooltip
      showArrow={true}
      placement="bottom"
      className="dark"
      content={
        <Card className="w-[390px] dark">
          <CardHeader className="justify-between">
            <div className="flex gap-4">
              <Avatar isBordered radius="full" size="md" src={img} />

              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="font-bold text-[15px]">{name}</h4>
                <h5 className="text-small  text-default-500">{username}</h5>
              </div>
            </div>
          </CardHeader>
          <CardBody className=" flex  flex-row gap-1 justify-between items-center pb-2  font-bold text-[15px]">
            <div className="flex items-center flex-col">
              <p>4</p>
              <p className="text-small items-center text-default-500">posts</p>
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
      <Avatar src={img} className="items-center w-[50px] h-[50px] " />
    </Tooltip>
  );
};
