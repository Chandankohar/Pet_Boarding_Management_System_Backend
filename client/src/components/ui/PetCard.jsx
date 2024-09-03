import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ pet }) => {
  const { _id: petId, name, age, photos, colour,description,breed,price,date } = pet;
  return (
    <Link to={`/pet/${petId}`} className="m-4 flex flex-col md:m-2 xl:m-0">
      <div className="card " style={{color:"black",border:"solid gray 3px",borderRadius:'15px'}}>
        {photos?.[0] && (
          <img
            src={`${photos?.[0]}`}
            className="h-3/5 w-full rounded-xl object-cover"
          />
        )}
       <h2 className="truncate font-bold pl-2"> Name: {name}</h2>
        <h3 className="truncate text-sm text-black-500 pl-2">Breed: {breed}</h3>
        <h3 className="truncate text-sm text-black-500 pl-2">Age: {age}</h3>
        <h3 className="truncate text-sm text-black-500 pl-2">Colour: {colour}</h3>
       
        <p className="truncate text-sm text-black-500 pl-2">Date: {date}</p>
          <span className="font-semibold pl-2">Price: ₹{price} </span>
        {/* <div className="mt-1 pl-2"> */}
         
        {/* </div> */}
      </div>
    </Link>
  );
};

export default PetCard;
