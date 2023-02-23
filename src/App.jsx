import { useState } from 'react'
import countries from './countries.json';
import './App.css'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from "react-router-dom";

function App() {
  const [countriesState, setCountriesState] = useState(countries);

  return (
   <div className='App'>
    <h1>Wiki Countries</h1>
<Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} /> 
      </Routes>
<div>
      </div>
   </div>
  )
  }
export default App