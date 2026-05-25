import React from "react";
import Cards from "./Cards";
import { motion, AnimatePresence } from "motion/react";

const Foreground = () => {
  const data = [
    {
      desc: "hi how are you",
      size: "1.5mB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "hi how are you",
      size: "1.5mB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "hi how are you",
      size: "1.5mB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "hi how are you",
      size: "1.5mB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red"},
    },
    {
      desc: "hi how are you",
      size: "1.5mB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
  ];
  
  return (
    <motion.div className="p-5 pt-26 fixed w-full h-screen top-0 left-0 z-3 flex gap-10 flex-wrap">
      {data.map((item, index)=>(
        <Cards data = {item} />
      ))}
    </motion.div>
  );
};

export default Foreground;
