import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { MdOutlineLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, onDarkMode, handleBackHome }) {
  return (
    <header className="h-[100px] bg-white px-4 shadow-md dark:bg-darkBlue lg:h-20">
      <nav className="mx-auto flex h-full max-w-[1280px] items-center justify-between">
        <Link to="/">
          <h1 className="text-lg font-extrabold" onClick={handleBackHome}>
            Where in the world?
          </h1>
        </Link>
        <div
          className="flex cursor-pointer items-end gap-2"
          onClick={onDarkMode}
        >
          {darkMode ? (
            <MdOutlineLightMode color={'white'} size={28} />
          ) : (
            <HiOutlineMoon size={28} />
          )}

          <span className="font-semibold">
            {darkMode ? 'Light Mode' : 'Dark Mode'}{' '}
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
