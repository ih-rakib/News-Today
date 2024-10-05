import { News } from "@/types/news";
import Image from "next/image";
import React from "react";
export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const news: News[] = await fetch(
    `https://news-api-next-js-kappa.vercel.app/api/news`
  ).then((res) => res.json());
  return news.map((item) => ({
    id: String(item._id),
  }));
}

const NewsDetailsPage = async ({ params }: { params: { id: string } }) => {
  const news = await fetch(
    `https://news-api-next-js-kappa.vercel.app/api/news/${params.id}`
  ).then((res) => res.json());

  if (!news) {
    return <span>No news found!</span>;
  }

  return (
    <section className="py-12">
      <article className="max-w-4xl mx-auto p-6 shadow-md rounded-lg border">
        {news?.imageUrl && (
          <div>
            <Image
              src={news?.imageUrl}
              alt={news.title}
              width={800}
              height={450}
              className="rounded-md object-cover"
            ></Image>
          </div>
        )}

        <div className="my-5">
          <h2 className="text-2xl font-bold mb-3">{news?.title}</h2>

          <div className="flex justify-between items-center text-sm mb-3">
            <p>{new Date(news?.published_at).toLocaleDateString()}</p>
            <p>
              Source: <span>{news?.source}</span>
            </p>
          </div>
        </div>

        <div className="mb-4">
          {news?.categories?.map((category: string) => (
            <span
              key={category}
              className="bg-blue-100 text-blue-700 text-xs font-semibold mr-2 px-2 py-1 rounded"
            >
              {category}
            </span>
          ))}
        </div>

        <p className="mb-4">{news?.snippet}</p>

        <p className="mb-6">{news?.description}</p>
      </article>
    </section>
  );
};

export default NewsDetailsPage;
