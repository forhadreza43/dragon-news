import React from "react";
import { NavLink } from "react-router";

const Category = ({ category }) => {
  const { id, name } = category;
  // console.log(id, name);
  return (
    <NavLink
      to={`/category/${id}`}
      className={({ isActive }) => `px-4 pl-8 py-4 text-accent ${isActive ? "bg-base-300 text-accent-content font-semibold rounded" : ""}`}
    >
      {name}
    </NavLink>
  );
};

export default Category;
