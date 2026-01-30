import { useState } from "react"
import ChildComponent from './ChildComponent.jsx'
import SiblingComponent from './SiblingComponent.jsx'


const ParentComponent = () => {
    const [counter, setCount] = useState(0);
    //увеличить 
    const increment = () => {
        setCount((counter) => counter + 1);
    }
    //рандом
    const setRandom = () => {
        setCount(Math.floor(Math.random() * 10) + 1)
    }
    //уменьшить
    const decrement = () => {
        if(counter > 0) {
            setCount((counter) => counter - 1)
        } else {
            console.log('счётчик 0');
        }
    }


    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={increment}>Увеличить</button>
            <button onClick={()=> setCount(0)}>Сбросить</button>
            <button onClick={setRandom}>Сгенерируй</button>
            <button onClick={decrement}>Уменьшить</button>
            <ChildComponent name={'Katya'} counter={counter}/>
            <SiblingComponent/>
        </div>
    )
}



export default ParentComponent