import { memo } from "react";

const TaskItem = ({ task, onDelete }) => {
  console.log(`render taskItem: ${task.text} id: ${task.id}`);

  return (
    <li>
      {task.text}
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </li>
  );
};

export default memo(TaskItem);
