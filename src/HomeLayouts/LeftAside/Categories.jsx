import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  return (
    <div>
      <h3 className="mb-3 text-xl font-semibold">All Category</h3>
      <div className="flex flex-col">
        {categoryData.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
