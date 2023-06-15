import React, {useState} from "react";

function Task({ text, category, handleRemove, index}) {


  // if(remove)  {
  //   return null;
  // }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" data-index={index} onClick={handleRemove}>X</button>
    </div>
  );
}

export default Task;
