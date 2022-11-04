import React from "react";
import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="card card-compact shadow-2xl rounded-md">
        <figure className="bg-[#1F2937] rounded-md">
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body bg-base-100">
          <div className="flex">
            <div className="w-6/12">
              <h2 className="card-title">{name}</h2>
              <p className="text-left">Total Quiz: {total}</p>
            </div>
            <div className="card-actions w-6/12 flex items-end justify-end">
              <button className="badge p-3 bg-green-800 hover:bg-slate-200 hover:text-slate-700">
                <Link to={`/quiz/${id}`}> Start Quiz </Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
