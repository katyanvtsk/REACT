import { useState } from "react";
const TodoList = () => {
   const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

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
        "10000 шагов"
    ];

   const addTask = () => {
    const randomIndex = Math.floor(Math.random() * randomTasks.length)
    const newTask = randomTasks[randomIndex]
    setTasks((prev) => [...prev, newTask])
   }

   const deleteTask = () => {
    setTasks((prev) => {
        const newArr = [...prev];
        newArr.pop();
        return newArr;
    })
   }

    return (
        <div style={{
            border: '2px solid #ccc',
            padding: '10px',
        }}>
            <h2>Список задач</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <div style={{
                    display:'flex',
                    gap: '5px',
                    justifyContent:'center'
                }}>
                    <button onClick={addTask}>Добавить задачу</button>
                    <button onClick={deleteTask}>Удалить</button>
            </div>
        </div>
    )
}

export default TodoList