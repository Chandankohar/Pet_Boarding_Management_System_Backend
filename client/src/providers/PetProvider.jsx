import { createContext } from 'react';

import { useProvidePets } from '../../hooks';

const initialState = {
  pets: [],
  setPet: () => {},
  loading: true,
  setLoading: () => {},
};

export const PetContext = createContext(initialState);

export const PetProvider = ({ children }) => {
  const allPets = useProvidePets();

  return (
    <PetContext.Provider value={allPets}>{children}</PetContext.Provider>
  );
};
