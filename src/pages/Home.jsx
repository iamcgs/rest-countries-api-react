import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import SearchCountry from '../components/SearchCountry';

function Home({
  isLoading,
  searchCountries,
  handleSearch,
  searchCountry,
  setSearchCountry,
  regionsArray,
  setOpenSelect,
  openSelect,
  handleSelect,
  region,
  handleRegion,
}) {
  return (
    <div>
      <SearchCountry
        regionsArray={regionsArray}
        handleSearch={handleSearch}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        setOpenSelect={setOpenSelect}
        openSelect={openSelect}
        handleSelect={handleSelect}
        region={region}
        handleRegion={handleRegion}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {searchCountries.length === 0 ? (
            <h2 className="mt-12 w-full p-4 text-center italic text-darkBlue dark:text-whiteClr">
              '{searchCountry}' is not found {region ? `in ${region}.` : '.'}{' '}
              Please try again.
            </h2>
          ) : (
            <section className="grid gap-12 gap-y-8 md:mx-auto md:max-w-[800px] md:grid-cols-2 md:gap-x-2 lg:max-w-[1000px] lg:grid-cols-3 lg:px-14 xl:max-w-full xl:grid-cols-4 xl:gap-16 xl:px-20">
              {searchCountries.map((country, index) => {
                return (
                  <div
                    key={index}
                    className="mx-auto flex h-[420px] w-[300px] cursor-pointer flex-col justify-start rounded-md bg-whiteClr drop-shadow-md dark:bg-darkBlue md:w-[350px] lg:h-[380px] lg:w-[265px]"
                  >
                    <Link to={`/details/${country.cca3}`}>
                      <div className="h-[200px] w-full lg:h-[170px]">
                        <img
                          src={country.flags.png}
                          alt={`${country.name.common} flag`}
                          className="h-full w-full rounded-t-md object-fill drop-shadow-md"
                        />
                      </div>
                      <div className="h-[220px] w-full p-8 dark:text-whiteClr lg:h-[210px] lg:py-6">
                        <h2 className="mb-4 text-xl font-bold">
                          {country.name.common}
                        </h2>
                        <p className="text-base">
                          <span className="font-semibold">Population: </span>
                          {country.population}
                        </p>
                        <p className="text-base">
                          <span className="font-semibold">Region: </span>
                          {country.region}
                        </p>
                        <p className="text-base">
                          <span className="font-semibold">Capital: </span>
                          {country.capital}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </section>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
