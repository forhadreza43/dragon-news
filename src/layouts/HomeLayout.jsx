import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import Categories from "../HomeLayouts/LeftAside/Categories";
import LeftAside from "../HomeLayouts/LeftAside/LeftAside";
import RightAside from "../HomeLayouts/RightAside/RightAside";

const Root = () => {
  return (
    <>
      <header className="mx-auto w-11/12">
        <Header />
        <LatestNews />
        <Navbar />
      </header>
      <main className="mx-auto grid w-11/12 grid-cols-12 gap-5 mt-18">
        <aside className="left-aside col-span-3">
          <LeftAside/>
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="right-aside col-span-3">
          <RightAside/>
        </aside>
      </main>
    </>
  );
};

export default Root;
