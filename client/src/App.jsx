import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/ui/Layout';
import IndexPage from './pages/IndexPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PetsPage from './pages/PetsPage';
import PetBookingsPage from './pages/PetBookingsPage';
import PetFormPage from './pages/PetFormPage';
import PetPage from './pages/PetPage';
import SingleBookedPlace from './pages/SingleBookedPet';
import axiosInstance from './utils/axios';
import { UserProvider } from './providers/UserProvider';
import { PetProvider } from './providers/PetProvider';
import { getItemFromLocalStorage } from './utils';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  useEffect(() => {
    // set the token on refreshing the website
    axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${getItemFromLocalStorage('token')}`;
  }, []);

  return (
    
      <UserProvider>
        <PetProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/account" element={<ProfilePage />} />
              <Route path="/account/pet" element={<PetsPage />} />
              <Route path="/account/pet/new" element={<PetFormPage />} />
              <Route path="/account/pet/:id" element={<PetFormPage />} />
              <Route path="/pet/:id" element={<PetPage />} />
              <Route path="/account/bookings" element={<PetBookingsPage />} />
              <Route
                path="/account/bookings/:id"
                element={<SingleBookedPlace />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <ToastContainer autoClose={2000} transition={Slide} />
        </PetProvider>
      </UserProvider>
    
  );
}

export default App;
