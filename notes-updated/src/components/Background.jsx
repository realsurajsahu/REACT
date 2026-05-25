import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-2 w-full h-screen">
        <div className="w-full py-10 flex justify-center text-zinc-600 text-xl font-bold">
          Documents
        </div>
        <h1 className="text-9xl leading-none tracking-tight font-bold text-zinc-900 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          DOCS
        </h1>
      </div>
    </>
  );
};

export default Background;
