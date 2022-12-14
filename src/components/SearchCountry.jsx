import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

function SearchCountry({
  countryName,
  regionsArray,
  handleSearch,
  region,
  handleRegion,
  setOpenSelect,
  openSelect,
  handleSelect,
}) {
  return (
    <form className=" my-5 mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0 xl:px-0">
      <div className="relative lg:w-full">
        <span className="absolute left-10 top-1/2 -translate-y-1/2 text-darkGray/70 dark:text-whiteClr">
          <AiOutlineSearch size={28} />
        </span>

        <input
          type="text"
          name="country"
          id="country"
          value={countryName}
          placeholder="Search for a country..."
          className="h-14 w-full rounded-md bg-whiteClr pl-20 pr-4 shadow-md outline-transparent placeholder:text-darkGray/40 focus:outline-darkGray/30 dark:bg-darkBlue dark:placeholder:text-whiteClr/80 dark:focus:outline-veryDarkBlueDM lg:w-3/4"
          onChange={handleSearch}
          onClick={() => setOpenSelect(false)}
        />
      </div>
      <div className="relative flex w-3/4 flex-col gap-4">
        <div
          className={
            !openSelect ? 'select-region' : 'select-region select-open'
          }
          onClick={handleSelect}
        >
          <span>
            {region === ''
              ? 'Filter by Region'
              : JSON.stringify(region).replace(/['"]+/g, '')}{' '}
          </span>
          {openSelect ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
        </div>
        {openSelect && (
          <ul className="absolute top-16 z-10 flex w-full flex-col gap-3 rounded-md bg-white py-4 px-6 shadow-md outline outline-[1px] outline-slate-400/70 dark:bg-darkBlue dark:outline-white md:w-1/2 lg:right-0">
            {regionsArray.map((region, index) => {
              return (
                <li
                  className="cursor-pointer transition-all duration-200 ease-in-out hover:text-veryDarkBlueLM/70 dark:hover:text-veryLightGray/70"
                  key={index}
                  onClick={() => handleRegion(region)}
                >
                  {region}{' '}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </form>
  );
}

export default SearchCountry;
