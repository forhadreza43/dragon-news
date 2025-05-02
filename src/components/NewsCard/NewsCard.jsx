import {formatDate } from "date-fns";
import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { cn } from "../../lib/utils";
import { Bookmark, Share, Star } from "lucide-react";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, total_view, rating } = news;
  //   const formattedDate = formatDate(new Date(news.author.published_date));

  // Generate stars for rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating.number
              ? "fill-orange-500 text-orange-500"
              : "text-gray-300",
          )}
        />,
      );
    }
    return stars;
  };

  // Truncate details for preview
  //   const truncatedDetails =
  //     details.length > 200 ? `${details.substring(0, 200)}...` : details;

  return (
    <div className="card mb-5 overflow-hidden rounded-xl bg-base-100 shadow-md">
      {/* Author Info */}
      <div className="flex items-center justify-between px-4 py-4 bg-base-200">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {formatDate(
                new Date(author.published_date),
                "yyyy MM dd",
              ).toString()}
              {/* {new Date(author.published_date.split("T")[0]).toString()} */}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <Bookmark className="h-5 w-5 text-gray-600" />
          </button>
          <button className="rounded-full p-2 transition-colors hover:bg-gray-100">
            <Share className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="mt-2 px-4 text-lg leading-snug font-bold">{title}</div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img src={image_url} alt="News" className="w-full rounded-md" />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        {details.slice(0, 180)}...
        <span className="cursor-pointer font-semibold text-orange-500">
          {" "}
          Read More
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mx-4 py-4 border-t border-gray-200">
        <div className="flex items-center">
          {renderStars()}
          <span className="ml-2 font-medium text-gray-600">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
