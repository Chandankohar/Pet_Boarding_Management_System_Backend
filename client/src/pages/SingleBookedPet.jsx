import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AccountNav from '../components/ui/AccountNav';
import AddressLink from '../components/ui/AddressLink';

import PetGallery from '../components/ui/PetGallery';
import Spinner from '../components/ui/Spinner';
import axiosInstance from '../utils/axios';

const SingleBookedPlace = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState({});
  const [loading, setLoading] = useState(false);

  const getBookings = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get('/petbuy');
      
console.log(data.petbuy)
      // filter the data to get current booking
      const filteredBooking = data.petbuy.filter(
        (petbuy) => petbuy._id === id,
      );

      setBooking(filteredBooking[0]);
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookings();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <AccountNav />
      {booking?.pet ? (
        <div className="p-4">
          <h1 className="text-3xl">{booking?.pet?.name}</h1>

          <AddressLink
            className="my-2 block"
            placeAddress={booking.pet?.age}
          />
          <div className="my-6 flex flex-col items-center justify-between rounded-2xl bg-gray-200 p-6 sm:flex-row">
            <div className=" ">
              <h2 className="mb-4 text-2xl md:text-2xl">
                Your booking information
              </h2>
              {booking.date}
              <div>quantity:{booking.numofpet}</div>
              
              
            </div>
            <button className="mt-5 w-full rounded-2xl bg-blue-300 p-6 text-blue sm:mt-0 sm:w-auto">
              <div className="hidden md:block">Proceed for payment</div>
              
               
            </button>
            <div className="mt-5 w-full rounded-2xl bg-primary p-6 text-white sm:mt-0 sm:w-auto">
              <div className="hidden md:block">Total price</div>
              <div className="flex justify-center text-3xl">
                <span>₹{booking?.price}</span>
              </div>
            </div>
          </div>
          <PetGallery pet={booking?.pet} />
        </div>
      ) : (
        <h1> No data</h1>
      )}
    </div>
  );
};

export default SingleBookedPlace;
