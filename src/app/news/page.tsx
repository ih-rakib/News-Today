import NewsList from "@/components/news/NewsList";
import React from "react";

const NewsPage = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-7">Latest News</h2>
      <NewsList></NewsList>
    </section>
  );
};

export default NewsPage;
