import React from "react";
import CardContent from "./CardContent";

const Cards = (props) => {
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden relative shrink-0">
      <img
        src={props.img}
        alt=""
        className="h-full object-cover"
      />
      <CardContent id = {props.id} desc = {props.desc} buttonColor = {props.buttonColor} button = {props.button}/>
    </div>
  );
};

export default Cards;
