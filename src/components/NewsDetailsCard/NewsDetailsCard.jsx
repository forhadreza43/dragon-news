import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  const { category_id, title, image_url, details } = news || {};
  return (
    <div className="rounded-lg border border-base-300 p-4">
      <img className="rounded" src={image_url} alt="" />
      <h2 className="py-4 text-xl font-bold">{title}</h2>
      <p className="mb-4 text-accent">{details}</p>
      <Link
        to={`/category/${category_id}`}
        className="cursor-pointer rounded-lg bg-pink-600 px-4 py-2 text-white"
      >
        All News in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
