import { memo, useCallback, useRef, useState } from "react";
import TaskItem from "./TaskItem";

const Task = () => {
  console.log("render task");

  const [tasks, setTasks] = useState([
    { id: 1, text: "Купить хлеб" },
    { id: 2, text: "Погулять с собакой" },
  ]);

  const randomTasks = [
    "Помыть посуду",
    "Сделать домашку",
    "Уборка",
    "Сходить в бассейн",
    "Прочитать книгу",
    "Увидеться с подругой",
    "Посмотреть фильм",
    "Изучить новую тему",
    "Позвонить родителям",
    "10000 шагов",
  ];
  const newId = useRef(3);

  const addTask = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * randomTasks.length);
    const newTask = randomTasks[randomIndex];

    setTasks((prev) => [...prev, { id: newId.current++, text: newTask }]);
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }, []);

  const deleteLast = useCallback(() => {
    setTasks((prev) => {
      const newArr = [...prev];
      newArr.pop();
      return newArr;
    });
  }, []);

  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "10px",
      }}
    >
      <h2>Список задач</h2>
      <ul>
        {tasks.map((item) => (
          <TaskItem key={item.id} task={item} onDelete={deleteTask} />
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        <button onClick={addTask}>Добавить задачу</button>
        <button onClick={deleteLast}>Удалить последнюю</button>
      </div>
    </div>
  );
};

export default memo(Task);
