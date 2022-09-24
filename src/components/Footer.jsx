import React from 'react';

function Footer() {
  return (
    <footer className="mt-8 p-8">
      <p className="text-center">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . <br /> Coded by{' '}
        <a
          href="https://github.com/iamcgs"
          className="text-cyan-700 hover:opacity-80"
        >
          Carla
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
