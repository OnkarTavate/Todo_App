import { useState } from "react";
function AddTodo({ addButtonClicked }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if(todoName.trim() === "" || dueDate.trim() === ""){
      alert("Please fill the both fields before adding a item.");
      return;
    }
    addButtonClicked(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            // id="inputVal"
            value={todoName}
            onChange={handleTodoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            // id="dateVal"
            value={dueDate}
            onChange={handleDueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
