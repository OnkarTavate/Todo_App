import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onClickDeleteButton }) => {
  if (todoItems.length === 0) {
    return <div className={styles.welcomeMessage}> Enjoy your day..!</div>;
  }
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          onClickDeleteButton={onClickDeleteButton}
        />
      ))}
    </div>
  );
};

export default TodoItems;
