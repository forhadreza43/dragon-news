import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewsCard from "../NewsCard/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [categoryNews, setCategoryNews] = useState([]);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));

    if (id == "0") {
      setCategoryNews(newsData);
    } else if (id == "1") {
      const filteredNews = newsData.filter(
        (item) => item.others.is_today_pick == true,
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = newsData.filter((item) => item.category_id == id);
      setCategoryNews(filteredNews);
    }
    // setLoading(false);
  }, [id, newsData]);
//   if (loading) return <div>Loading...</div>;
  return (
    <div>
      {categoryNews.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default CategoryNews;
