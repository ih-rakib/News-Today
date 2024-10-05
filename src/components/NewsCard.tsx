import { News } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface NewsCardProps {
  item: News;
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div className="h-full border p-4 rounded-md shadow-md">
      <Link href={`/news/${item._id}`}>
        <Image
          src={item?.imageUrl}
          alt={item.title}
          width={500}
          height={500}
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
        ></Image>
      </Link>

      <div>
        <h2 className="text-xl font-semibold my-3">
          {item?.title.substring(0, 65)}
        </h2>
        <p className="mb-4">{item?.description.substring(0, 100)}...</p>
        <Link href={`/news/${item._id}`}></Link>
        <Button className="hover:bg-gray-200 hover:text-black hover:border">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
