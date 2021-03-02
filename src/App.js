import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNayoks(data))
  }, [])

  // const nayoks = ['jashim', 'bapparaz', 'dipjol', 'rieaz', 'sakib khan']
  // const nayoks = [{name:'jashim', age: 34}, {name:'bapparaz', age: 55}, {name:'dipjol', age: 66}]
  
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {/* <Nayok name= {nayoks[0]}/>
      <Nayok name= {nayoks[1]}/>
      <Nayok name= {nayoks[2]}/>
      <Nayok name= {nayoks[3]}/> */}

      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(5);
  const handleClick = () => setCount(count + 1);
  return(
    <div>
      <button onClick={handleClick}>Add Movies</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted: {props.movies}</h4>
}

function Nayok(props){
  return (
    <div>
      <h1>Ami Nayok - {props.name}</h1>
      <h4>I have done 5 movies in {props.age} years</h4>
    </div>
  )
}

export default App;
