import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDelete(task) {
    const taskFilter=[...tasks].filter(el => {
      return el.text !== task.text
    })
    setTasks(taskFilter)
  }

  function handleCategoryChange(cat) {
    setSelectedCategory(cat)
  }

  let filteredTasks = [...tasks].filter(el => {
    return el.category === selectedCategory || selectedCategory === "All"
  })

  function addNewTask(task)  {
    setTasks([...tasks, task])
  }
  return ( 
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} categories={CATEGORIES} handleCategoryChange={handleCategoryChange}  />
      <NewTaskForm categories={CATEGORIES} addNewTask={addNewTask}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;