import React, { useContext } from "react";
import { PostsContext } from "@/context/PostsProvider";

const CreatePostButton = ({ classname, label, onClick }) => {


  return (
    <div className={`flex flex-row w-auto items-center ${classname}`}>
      {label && <p className="menu-label ml-3">{label}</p>}
      <button className="text-green-500 font-semibold text-3xl md:text-xl" onClick={onClick}>
        +
      </button>
    </div>
  );
};

export default CreatePostButton;
