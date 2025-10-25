import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/independent?status=true')
    .then(res => res.json())
    .then(data => {
      fetch('https://restcountries.com/v3.1/independent?status=false')
      .then(res => res.json())
      .then(data2 => {
        setCountries([...data, ...data2]);
      })
      .catch(error => console.log('error2 ', error))
    })
    .catch(error => console.log('error: ',error))
  }, []);

   const handleAddCountry = (country) => {
        console.log(country);
    }

  return (
    <>
      <div>
      <h1>Country Loaded: {countries.length}</h1>
      <h4>Country added: </h4>
        {
          countries.map(country => <Country key={country.name.common} country={country} handleAddCountry={handleAddCountry}></Country>)
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
