import React, {useState} from "react";

function Task({ task, handleDelete}) {

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => handleDelete((task))}>X</button>
    </div>
  );
}

export default Task;
