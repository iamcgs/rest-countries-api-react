import React from 'react';
import Spinner from '../components/assets/spinner.gif';

function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <img src={Spinner} alt="Loading" className="w-12 py-32" />
    </div>
  );
}

export default Loading;
