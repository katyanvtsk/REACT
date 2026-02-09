import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count.jsx'
import DogGallery from './DogGallery.jsx'
import Update from './Update.jsx'
import Breed from './Breed.jsx'

function App() {
  const [count, setCount] = useState(1); // ввод числа картинок
  const [dogs, setDogs] = useState([]);//для массива картинок
  const [loading, setLoading] = useState(true);//для загрузки
  const [update, setUpdate] = useState(0);//счётчик обновлений
  const [breed, setBreed] = useState([]) //для списка пород
  const [selectedBreed, setSelectedBreed] = useState('random') //выбранная порода

  //для списка пород
  const fetchBreeds = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/list/all');
      if (!res.ok) {
        throw new Error ('ошибка запроса пород!!')
      };
      const data = await res.json(); // "message":{"affenpinscher":[],...} порода - ключ
      const breedList = Object.keys(data.message);
      setBreed(breedList);
    } catch (error) {
        console.log(error.message);
  };
};

  useEffect(()=> { 
    console.log('загружаем список пород');
    fetchBreeds();
  }, []); // componentDidMount для пород



//для выбранной породы
  const fetchData = async () => {
    try {
      setLoading(true)
      let urlApi; // для ссылки
//если выбраны все породы - использовать старую ссылку
      if (selectedBreed == 'random') {
        urlApi = `https://dog.ceo/api/breeds/image/random/${count}`;
      } else {
          urlApi = `https://dog.ceo/api/breed/${selectedBreed}/images/random/${count}`;
        };

      const res = await fetch(urlApi);
      if(!res.ok) {
        throw new Error ('ошибка запроса!!')
      }
      const data = await res.json();
      setDogs(data.message)
    } catch(error) {
      console.log(error.message);
    } finally {
      setLoading(false)
    }
}

 useEffect(() => {
    console.log('загрузка картинок');
    fetchData();
  }, [selectedBreed]); // componentDidUpdate при смене породы - обновление

  //счётчик обновлений
  const getUpdate = () => {
    fetchData()
    setUpdate((prev)=>prev + 1)
  }

  return (
    <>
    <h2>Галерея собак</h2>
    <p>Картинки обнавлены раза {update} раз (a)</p>
    <Breed breed={breed} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed}/>
    <Count setCount={setCount}/>
    <DogGallery dogs={dogs} loading={loading}/>
    <Update getUpdate={getUpdate}/>
    </>
  )
}

export default App
