import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CountryDetails from './pages/CountryDetails';
import Home from './pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [openSelect, setOpenSelect] = useState(false);
  const [region, setRegion] = useState('');

  const handleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  const handleBackHome = () => {
    setOpenSelect(false);
    setRegion('');
  };

  const regionsArray = [
    'All Countries',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    };
    fetchCountries();
  }, []);

  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
  };

  const handleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const handleRegion = (value) => {
    setRegion(value);
    setOpenSelect(false);
  };

  let filteredCountries = [];

  if (region === '' || region === 'All Countries') {
    filteredCountries = countries;
  } else {
    filteredCountries = countries.filter((country) => {
      const countryRegion = country.region.toLowerCase();
      const filteredRegion = region.toLowerCase();

      return countryRegion === filteredRegion;
    });
  }

  let searchCountries = [];

  if (searchCountry.length < 1) {
    searchCountries = filteredCountries;
  } else {
    searchCountries = filteredCountries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      const countrySearch = searchCountry.toLowerCase();

      return countryName.includes(countrySearch);
    });
  }

  return (
    <>
      <Navbar
        darkMode={darkMode}
        onDarkMode={handleDarkMode}
        handleBackHome={handleBackHome}
      />
      <main className="pb-8 pt-10">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                countries={countries}
                regionsArray={regionsArray}
                isLoading={isLoading}
                handleSearch={handleSearch}
                searchCountry={searchCountry}
                setSearchCountry={setSearchCountry}
                searchCountries={searchCountries}
                openSelect={openSelect}
                handleSelect={handleSelect}
                region={region}
                handleRegion={handleRegion}
                filteredCountries={filteredCountries}
              />
            }
          />
          <Route path="/details/:countryCode" element={<CountryDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
