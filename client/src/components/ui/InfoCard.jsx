import React from 'react';
import { Link } from 'react-router-dom';
import PetImg from './PetImg';

const InfoCard = ({ pet }) => {
  return (
    <Link
      to={`/account/pet/${pet._id}`}
      className="my-3 flex cursor-pointer flex-col gap-4 rounded-2xl bg-gray-100 p-4 transition-all hover:bg-gray-300 md:flex-row"
      key={pet._id}
    >
      <div className="flex w-full shrink-0 bg-gray-300 sm:h-32 sm:w-32 ">
        <PetImg pet={pet} />
      </div>
      <div className="">
        <h2 className="text-lg md:text-xl">{pet.name}</h2>
        <p className="line-clamp-3 mt-2 text-sm">{pet.description}</p>
      </div>
    </Link>
  );
};

export default InfoCard;
