import { useEffect, useState } from 'react';

const Breed = ({breed, selectedBreed, setSelectedBreed}) => {
    const onChange = (e) => {
        setSelectedBreed(e.target.value)
    }
    return (
        <div>
            <label htmlFor="forBreed">Порода:</label>
            <select id="forBreed"
                    value={selectedBreed}
                    onChange={onChange}>
                <option value="random">random</option> 

                {breed.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default Breed