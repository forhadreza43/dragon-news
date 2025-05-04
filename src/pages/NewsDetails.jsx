import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewsDetailsCard from "../components/NewsDetailsCard/NewsDetailsCard";
import SocialLogin from "../HomeLayouts/RightAside/SocialLogin";
import Header from "../components/Header/Header";

const NewsDetails = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [news, setNews] = useState({});
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  useEffect(() => {
    const currentNews = newsData.find((item) => item.id == id);
    setNews(currentNews);
  }, [id, newsData]);
  //   console.log(news);
  return (
    <>
      <Header />
      <div className="mx-auto grid w-11/12 grid-cols-12 gap-5 mb-30">
        <section className="col-span-9">
          <p className="pb-4 font-bold">Dragon News</p>
          <NewsDetailsCard news={news} />
        </section>
        <section className="col-span-3 sticky top-0 h-fit">
          <SocialLogin />
        </section>
      </div>
    </>
  );
};

export default NewsDetails;
