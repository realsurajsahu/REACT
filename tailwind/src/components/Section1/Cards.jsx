import React from "react";
import CardContent from "./CardContent";

const Cards = () => {
  return (
    <div className="h-full w-80 bg-red-600 rounded-4xl overflow-hidden relative">
      <img
        src="https://images.unsplash.com/photo-1770027705793-e68be23cdd5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-full object-cover"
      />
      <CardContent/>
    </div>
  );
};

export default Cards;
