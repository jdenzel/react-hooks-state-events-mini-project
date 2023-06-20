import React, {useState} from "react";

function NewTaskForm( {categories, addNewTask} ) {
  const formOutline = {
    category: "Code",
    text: ""
  }
  const [form, setForm] = useState({category: "Code", text: '' })

  const handleChange = (e) =>  {
    console.log(e.target.value)
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewTask(form)
    setForm(formOutline)
  }


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={(e) => handleChange(e)} value={form.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={e => handleChange(e)}>
          {
            categories.map((el, i) =>  {
              if(el !== 'All')  {
                return <option key={i} >{el}</option>
              }
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;