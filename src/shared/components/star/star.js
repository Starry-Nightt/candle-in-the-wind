import React from 'react';

function Star({ active }) {
  return (
    <>
      {active ? (
        <i className="fa-solid fa-star text-primary"></i>
      ) : (
        <i className="fa-regular fa-star text-primary"></i>
      )}
    </>
  );
}

export default Star;
