import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
//  const [x, y] = ['abc', 'def'];
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/independent?status=true')
    .then(res => res.json())
    .then(data => {
      fetch('https://restcountries.com/v3.1/independent?status=false')
      .then(res => res.json())
      .then(data2 => {
        const allCountries = [...data, ...data2];
        setCountries(allCountries);
      })
    });
  }, []);
  return (
    <>
      <div>
      <h1>Country Loaded: {countries.length}</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
