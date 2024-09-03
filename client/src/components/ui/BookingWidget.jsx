import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks';
import axiosInstance from '@/utils/axios';
//import DatePickerWithRange from './DatePickerWithRange';

const BookingWidget = ({pet}) => {
  //const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [bookingData, setBookingData] = useState({
    numofpet: 0,
    name: '',
    address:'',
    phone: '',
  });
  const [redirect, setRedirect] = useState('');
  const { user } = useAuth();

  const { numofpet, name, phone,address } = bookingData;
  const { _id:id, price } = pet;

  useEffect(() => {
    if (user) {
      setBookingData({ ...bookingData, name: user.name });
    }
  }, [user]);

  // const numberOfNights =
  //   dateRange.from && dateRange.to
  //     ? differenceInDays(
  //         new Date(dateRange.to).setHours(0, 0, 0, 0),
  //         new Date(dateRange.from).setHours(0, 0, 0, 0),
  //       )
  //     : 0;

  // handle booking form
  const handleBookingData = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = async () => {
    // User must be signed in to book pet
    if (!user) {
      return setRedirect(`/login`);
    }

    

    try {
      const response = await axiosInstance.post('/petbuy', {
        
        pet: id,
        price: numofpet * price,
        numofpet,
        name,
        address,
        phone,
        
      });
console.log(response.data)
      const bookingId = response.data.petbuy._id;

      setRedirect(`/account/bookings/${bookingId}`);
      toast('Congratulations! Enjoy with your pet.');
    } catch (error) {
      toast.error('Something went wrong!');
      console.log('Error: ', error);
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-xl text-black">
      <div className="text-center text-xl">
        Price: <span className="font-semibold">₹{pet.price}</span> / per pet
      </div>
      <div className="mt-4 rounded-2xl border">
        {/* <div className="flex w-full ">
          Shipping date:<DatePickerWithRange setDateRange={setDateRange} />
        </div> */}
        <div className="border-t py-3 px-4">
          <label>Number of pet: </label>
          <input
            type="number"
            name="numofpet"
           
            
            value={numofpet}
            onChange={handleBookingData}
          />
        </div>
        <div className="border-t py-3 px-4">
          <label>Your full name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleBookingData}
          />
          </div>
          <div className="border-t py-3 px-4">
          <label>Address: </label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleBookingData}
          />
          </div>
          <div className="border-t py-3 px-4">
          <label>Phone number: </label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleBookingData}
          />
        </div>
      </div>
      <button onClick={handleBooking} className="primary mt-4">
        Book this pet
        {numofpet > 0 && <span> ₹{numofpet * pet.price}</span>}
      </button>
    </div>
  );
};

export default BookingWidget;
