import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const TopicsContext = React.createContext([]);

const Main = () => {
  const quizTopics = useLoaderData();
  const topics = quizTopics.data;

  return (
    <TopicsContext.Provider value={topics}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </TopicsContext.Provider>
  );
};

export default Main;
