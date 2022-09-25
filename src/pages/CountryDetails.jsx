import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Loading from '../components/Loading';

function CountryDetails() {
  const [loadCountry, setLoadCountry] = useState(true);
  const [country, setCountry] = useState([]);

  const navigate = useNavigate();

  let { countryCode } = useParams();

  let code = JSON.stringify(countryCode).replace(/['"]+/g, '');

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      const data = await response.json();
      setCountry(data[0]);
      setLoadCountry(false);
    };

    fetchCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  let currenciesArr = [];

  let languagesArr = [];

  return (
    <>
      <button
        className="mx-10 mt-12 flex w-36 items-center justify-center gap-2 rounded-sm bg-whiteClr px-8 py-3 text-xl font-semibold shadow-md shadow-darkBlue/30 dark:bg-darkBlue dark:text-whiteClr lg:py-2"
        onClick={() => navigate(-1)}
      >
        <span>
          <HiOutlineArrowNarrowLeft size={28} />
        </span>
        <span>Back</span>
      </button>
      {loadCountry ? (
        <Loading />
      ) : (
        <section className="mt-14 flex flex-col gap-y-8 px-4 md:mx-auto md:max-w-[700px] lg:mx-10 lg:h-[375px] lg:max-w-full lg:flex-row lg:items-center lg:gap-6">
          <div className="lg:h-[375px] lg:w-[560px] lg:flex-1 lg:pr-10">
            <img
              src={country?.flags?.svg}
              alt={`${country?.name?.common} Flag`}
              className="drop-shadow-lg lg:h-full lg:w-full lg:object-fill"
            />
          </div>
          <div className="flex flex-col gap-10 dark:text-whiteClr lg:flex-1 lg:gap-6 lg:pr-6">
            <h2 className="text-3xl font-bold lg:mt-8 lg:text-2xl">
              {country?.name?.common}
            </h2>
            <div className="md:flex md:items-start md:justify-between">
              <div className="flex-col gap-2 text-lg md:flex lg:text-sm">
                <p>
                  <span className="font-bold">Native Name: </span>
                  {
                    country?.name?.nativeName[
                      Object.keys(country?.name?.nativeName)[0]
                    ].common
                  }
                </p>
                <p>
                  <span className="font-bold">Population: </span>
                  {country?.population}
                </p>
                <p>
                  <span className="font-bold">Region: </span>
                  {country?.region}
                </p>
                <p>
                  <span className="font-bold">Sub Region: </span>
                  {country?.subregion}
                </p>
                <p>
                  <span className="font-bold">Capital: </span>
                  {country?.capital}
                </p>
              </div>
            </div>
            <div className="flex-col gap-2 text-lg md:flex lg:text-sm">
              <p>
                <span className="font-bold">Top Level Domain: </span>
                {country?.tld}
              </p>
              <p>
                <span className="hidden">
                  {Object.keys(country.currencies).map((curr) => {
                    return currenciesArr.push(country?.currencies[curr].name);
                  })}
                </span>
                <span className="font-bold">
                  {currenciesArr.length === 1 ? 'Currency: ' : 'Currencies: '}{' '}
                </span>
                {currenciesArr.join(', ')}
              </p>
              <p>
                <span className="hidden">
                  {' '}
                  {Object.keys(country.languages).map((lang) => {
                    return languagesArr.push(country?.languages[lang]);
                  })}
                </span>

                <span className="font-bold">
                  {languagesArr.length === 1 ? 'Language: ' : 'Languages: '}
                </span>
                {languagesArr.join(', ')}
              </p>
            </div>

            <div className="mb-10 flex flex-col gap-6">
              <h2 className="text-xl font-bold lg:hidden">Border Countries:</h2>
              <div className="flex flex-wrap gap-3 lg:text-sm">
                <span className="hidden text-sm font-bold lg:block">
                  Border Countries:
                </span>
                {country?.borders ? (
                  country?.borders?.map((border) => {
                    return (
                      <Link
                        to={`/details/${border}`}
                        key={border}
                        state={border}
                        className="bg-whiteClr px-6 py-2 drop-shadow-lg dark:bg-darkBlue sm:px-10 lg:py-1 lg:px-4"
                      >
                        {border}
                      </Link>
                    );
                  })
                ) : (
                  <p className="-mt-4 lg:mt-0">
                    {country?.name?.common} has no border countries.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CountryDetails;
