import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import axiosInstance from '@/utils/axios';

import AccountNav from '@/components/ui/AccountNav';

import PhotosUploader from '@/components/ui/PhotosUploader';
import Spinner from '@/components/ui/Spinner';

const PetFormPage = () => {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addedPhotos, setAddedPhotos] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    colour:'',
    description: '',
    breed:'',
    price: '',
  });

  const {
    name,
    age,
    colour,
    description,
    breed,
    price,

  } = formData;

  const isValidPetData = () => {
    if (name.trim() === '') {
      toast.error("Title can't be empty!");
      return false;
    } else if (age.trim() === '') {
      toast.error("Address can't be empty!");
      return false;
    } else if (addedPhotos.length < 2) {
      toast.error('Upload at least 2 photos!');
      return false;
    } else if (description.trim() === '') {
      toast.error("Description can't be empty!");
      return false;
    }
    

    return true;
  };

  const handleFormData = (e) => {
    const { name, value, type } = e.target;
    // If the input is not a checkbox, update 'formData' directly
    if (type !== 'checkbox') {
      setFormData({ ...formData, [name]: value });
      return;
    }

    }
  

  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    axiosInstance.get(`/pet/${id}`).then((response) => {
      const { pet } = response.data;
      // update the state of formData
      for (let key in formData) {
        if (pet.hasOwnProperty(key)) {
          setFormData((prev) => ({
            ...prev,
            [key]: pet[key],
          }));
        }
      }

      // update photos state separately
      setAddedPhotos([...pet.photos]);

      setLoading(false);
    });
  }, [id]);

  const preInput = (header, description) => {
    return (
      <>
        <h2 className="mt-4 text-2xl">{header}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </>
    );
  };

  const savePet = async (e) => {
    e.preventDefault();

    const formDataIsValid = isValidPetData();
    // console.log(isValidPlaceData());
    const petData = { ...formData, addedPhotos };

    // Make API call only if formData is valid
    if (formDataIsValid) {
      if (id) {
        // update existing place
        const { data } = await axiosInstance.put('/pet/update-pet', {
          id,
          ...petData,
        });
      } else {
        // new place
        const { data } = await axiosInstance.post(
          '/pet/add-pet',
          petData,
        );
      }
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={'/account/pet'} />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="p-4" >
      <AccountNav />
      <form onSubmit={savePet}>
        {preInput(
          'Name',
          'Name for your pet. Should be short and catchy as in advertisement',
        )}
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleFormData}
          placeholder="name, for example: tommy"
        />

        {preInput('Age', 'Age of your pet')}
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleFormData}
          placeholder="age"
        />

        {preInput('Photos', 'minimum 2')}

        <PhotosUploader
          addedPhotos={addedPhotos}
          setAddedPhotos={setAddedPhotos}
        />
        <input
          type="text"
          name="colour"
          value={colour}
          onChange={handleFormData}
          placeholder="colour"
        />

        {preInput('Description', 'discription of the pet')}
        <textarea
          value={description}
          name="description"
          onChange={handleFormData}
        />


        {preInput('breed')}
        <input
          type="text"
          name="breed"
          value={breed}
          onChange={handleFormData}
          placeholder="breed"
        />

        <div>
            <h3 className="mt-2 -mb-1">Pet Price</h3>
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleFormData}
              placeholder="1"
            />
          </div>
       
        <button className="mx-auto my-4 flex rounded-full bg-primary py-3 px-20 text-xl font-semibold text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default PetFormPage;
