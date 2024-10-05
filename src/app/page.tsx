import Banner from "@/components/Banner";
import NewsCard from "@/components/NewsCard";
import NewsLetter from "@/components/NewsLetter";
import { News } from "@/types/news";

export default async function Home() {
  const res = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news`);
  const news = await res.json();
  // console.log(news);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Banner></Banner>

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {news.slice(0, 3).map((item: News) => (
          <div key={item._id}>
            <NewsCard key={item._id} item={item}></NewsCard>
          </div>
        ))}
      </div>
      <div className="my-12">
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
}
