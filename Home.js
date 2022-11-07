import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home" >
      <div className="headerContainer">
        <h1> Swim Siblings </h1>
        <p>Red Cross Certified Swimming Lessons</p>
        <Link to="/About">
          <button>  </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;