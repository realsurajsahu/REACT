import React from "react";
import "./index.css";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1770027705793-e68be23cdd5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
      desc: "Prime customers, that have access to bank credit and are satisfied with the current product",
      buttonColor: "blue",
      button: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1771326083410-eb9042091e43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Prime customers, that have access to bank credit and are not satisfied with the current service",
      buttonColor: "lightseagreen",
      button: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1770135157335-fa819e9ced2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D",
      desc: "Customers from near-prime and sub-prime segments with no access to bank credit",
      buttonColor: "yellow",
      button: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1771280718598-377b96776c9b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis officiis iure",
      buttonColor: "gray",
      button: "Undeserved",
    },
  ];

  return (
    <div id="scroll">
      <Section1 users = {users}/>
    </div>
  );
};

export default App;
