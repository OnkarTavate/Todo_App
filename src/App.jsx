import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  // const handleAddButton = () => {
  //   const inputValue = document.getElementById("inputVal");
  //   const dateValue = document.getElementById("dateVal");
  //   const NewTodoItems = [...todoItems, {name: inputValue.value, dueDate: dateValue.value}];
  //   setTodoItems(NewTodoItems);
  // }

  const handleAddButton = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  
  const handleDeleteButton = (todoItemName) => {
    const newTodoList = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoList);
    console.log(`${todoItemName} item deleted successfully..!`);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addButtonClicked={handleAddButton} />
      <TodoItems todoItems={todoItems} onClickDeleteButton = {handleDeleteButton}/>
    </center>
  );
}

export default App;
