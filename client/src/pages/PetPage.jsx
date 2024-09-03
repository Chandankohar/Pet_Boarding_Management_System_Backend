import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axiosInstance from '@/utils/axios';

import Spinner from '@/components/ui/Spinner';
import AddressLink from '@/components/ui/AddressLink';
import BookingWidget from '@/components/ui/BookingWidget';
import PetGallery from '@/components/ui/PetGallery';
//import PerksWidget from '@/components/ui/PerksWidget';

const PetPage = () => {
  const { id } = useParams();
  const [pet, setpet] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return '';
    }

    setLoading(true);

    const getpet = async () => {
      const { data } = await axiosInstance.get(`/pet/${id}`);
      setpet(data.pet);
      setLoading(false);
    };
    getpet();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!pet) {
    return;
  }

  return (
    <div className="mt-4 overflow-x-hidden px-8 pt-20 ">
      <h1 className="text-3xl text-black">{pet.name}</h1>

      <AddressLink petAddress={pet.age} />
      <PetGallery pet={pet} />

      <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr] text-black">
        <div className="">
          <div className="my-4 ">
            <h2 className="text-2xl font-semibold text-black">Description</h2>
            {pet.description}
          </div>
         
        </div>
        <div>
          <BookingWidget pet={pet} />
        </div>
      </div>
      
      </div>
    
  );
};

export default PetPage;
