import { useEffect, useState } from 'react';

const Count = ({setCount}) => {
    const [localCount, setLocalCount] = useState(1);

    const changeCount = (e) => {
        const num = e.target.value;
        if(num >= 1 && num <= 50) {
            console.log('значение изменилось');
            setLocalCount(num)
            setCount(num)
        }
    }

    return (
        <div>
            <p>Показать 
                <input type="number" value={localCount} onChange={changeCount}/>
            </p>
        </div>
    )
}


export default Count