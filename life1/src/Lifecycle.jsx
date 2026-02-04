//Классовая компонента
// import React, { Component } from 'react';
// class LifecycleComponent extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { 
//         data: null,
//         count: 0
//     };
//     this.increment = this.increment.bind(this);
//   }

//   increment () {
//     this.setState({count: this.state.count + 1})
//   }

//   componentDidMount() {
//     console.log('запрос отправлен');

//     fetch('https://todo-redev.herokuapp.com/api/todos', {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthdGphQGV4YW1wbGUuY29tIiwiaWQiOjIxNDksImlhdCI6MTc3MDE5OTEyOH0.nG85nEi5xQ2cpzW0FNqP_2umGTNLoOUAT-ro1siiYFo'
//         }
//       })
//     .then(response => {
//         if(!response.ok) {
//           throw new Error ('Ошибка')
//         }
//         return response.json()
//     })
//     .then(data => {
//       this.setState({
//         data: data
//       })
//     })
//     .catch(error => {
//         console.log(error.message);
//     })
//   }

//   shouldComponentUpdate (nextProps, nextState) {
//     return nextState.count !== this.state.count && nextState.count % 2 == 0
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.data !==this.state.data) {
//         console.log('обновились данные');
//     }
//     if(prevState.count !== this.state.count) {
//         console.log(`счётчик обновился - ${this.state.count}`);
//     }
//   }

//   componentWillUnmount () {
//     console.log('компонент умер');
//   }

//    render () {
//     return (
//         <div>
//           <p>{JSON.stringify(this.state.data)}</p>
//           <p>Счётчик: {this.state.count}</p>
//           <button onClick={this.increment}>Click</button>
//         </div>
//     )}
    
// }

//Функциональная компонента
import { useState, useEffect } from 'react';

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  //для предыдущих значений
  const [prevData, setPrevData] = useState(null);
  const [prevCount, setPrevCount] = useState(0);

  // componentDidMount()
  useEffect(()=> {
    console.log('запрос отправлен');
    fetch('https://todo-redev.herokuapp.com/api/todos', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthdGphQGV4YW1wbGUuY29tIiwiaWQiOjIxNDksImlhdCI6MTc3MDE5OTEyOH0.nG85nEi5xQ2cpzW0FNqP_2umGTNLoOUAT-ro1siiYFo'
        }
      })
      .then(response => {
        if(!response.ok) {
          throw new Error ('Error')
        }
        return response.json();
      })
      .then(data => {
        console.log('данные получены');
        setData(data);
      })
  }, [])

//componentDidUpdate
  useEffect(()=>{
    if(prevData !== data) {
      console.log('данные изменены');
      setPrevData(data)
    }

    if(prevCount !== count) {
      if(count % 2 == 0) {
        console.log(`счётчик обновился - ${count}`);
      }
      setPrevCount(count)
    }
  }, [data, count, prevCount, prevData]);

//componentWillUnmount
useEffect(()=> {
  return () => {
    console.log('компонент умер');
  }
}, [])  


  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Увеличить</button>
    </div>
  );
}

export default LifecycleComponent
