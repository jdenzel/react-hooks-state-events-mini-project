import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskState, setTaskState] = useState(tasks)

  function handleDelete(event) {
    const target = event.target
    const attributes = target.attributes
    let tempTaskState = [...taskState]
    tempTaskState.splice(attributes["data-index"].value, 1)
    setTaskState(tempTaskState)
  }

  return (
    <div className="tasks">
      {taskState.map((task, index) => (
        <Task key={index} index={index} text={task.text} category={task.category}  handleRemove={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
