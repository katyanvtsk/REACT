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

   const deleteTask = (indexToDelete) => {
    setTasks((prev) => {
        return prev.filter((_,index) => index !== indexToDelete)
    })
   }

   const deleteLast = () => {
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
                    <li key={index}>{task}
                    <button 
                        onClick={()=>deleteTask(index)}
                        style={{ marginLeft: '20px' }}>Удалить</button>
                    </li>
                ))}
            </ul>
            <div style={{
                    display:'flex',
                    gap: '5px',
                    justifyContent:'center'
                }}>
                    <button onClick={addTask}>Добавить задачу</button>
                    <button onClick={deleteLast}>Удалить последнюю</button>
            </div>
        </div>
    )
}

export default TodoList