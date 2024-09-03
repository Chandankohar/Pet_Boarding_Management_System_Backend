import React from 'react';

const PetImg = ({ pet, index = 0, className = null }) => {
  if (!pet.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }
  return <img src={pet.photos[index]} alt="" className={className} />;
};

export default PetImg;
