import React, { useContext } from "react";
import { TopicsContext } from "../Main";
import Header from "./Header";
import TopicCard from "./TopicCard";

const Home = () => {
  const topics = useContext(TopicsContext);
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div id="all-topic" className="w-10/12 mx-auto mt-5">
        <h2 className="font-semibold lg:text-5xl text-2xl pb-12 pt-5 text-lime-800	">
          Our Quizes
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-28">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic}></TopicCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
