import React from "react";
import CardSection from "../sections/card/CardSection";
import "./Contents.css";

const Contents = () => {
  return (
    <main className="main">
      <div className="container">
        {/* body part */}
        <div className="body">
          <CardSection />
        </div>
        <div className="sidebar">{/* sidebar goes here */}</div>
      </div>
      {/* Card Section */}
    </main>
  );
};

export default Contents;
