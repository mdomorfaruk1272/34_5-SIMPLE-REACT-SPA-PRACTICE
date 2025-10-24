import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/independent?status=true')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
    })
    .catch(error => console.log('error: ',error))
  }, []);
  return (
    <>
      <div>
      <h1>Country Loaded: {countries.length}</h1>
        {
          countries.map(country => <Country key={Math.random()} name={country.name.common}></Country>)
        }
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
