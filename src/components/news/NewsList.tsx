"use client";

import { fetchNews } from "@/lib/fetchNews";
import { News } from "@/types/news";
import React, { useEffect, useState } from "react";
import SearchNews from "./SearchNews";
import FilterCategory from "./FilterCategory";
import NewsCard from "../NewsCard";

const NewsList = () => {
  const [news, setNews] = useState<News[]>([]);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };
    getNews();
  }, [category, search]);

  //   console.log(news);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-10 mb-5">
        {/* search news */}
        <SearchNews onSearch={setSearch}></SearchNews>

        {/* filter category */}
        <FilterCategory onCategory={setCategory}></FilterCategory>
      </div>

      {/* news */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {news.map((item: News) => (
          <NewsCard key={item._id} item={item}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
