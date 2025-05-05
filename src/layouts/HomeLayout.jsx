import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import Categories from "../HomeLayouts/LeftAside/Categories";
import LeftAside from "../HomeLayouts/LeftAside/LeftAside";
import RightAside from "../HomeLayouts/RightAside/RightAside";
import Spinner from "../components/Spinner/Spinner";

const Root = () => {
  const { state } = useNavigation();
  return (
    <>
      <header className="mx-auto w-11/12">
        <Header />
        <LatestNews />
        <Navbar />
      </header>
      <main className="mx-auto mt-18 grid w-11/12 grid-cols-12 gap-5">
        <aside className="left-aside sticky top-0 col-span-3 h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          {state == "loading" ? <Spinner /> : <Outlet />}
        </section>
        <aside className="right-aside sticky top-0 col-span-3 h-fit">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default Root;
