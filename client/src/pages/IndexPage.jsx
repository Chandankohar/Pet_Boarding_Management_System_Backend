import { usePets } from '../../hooks';
import Spinner from '@/components/ui/Spinner';
import PetCard from '@/components/ui/PetCard';

const IndexPage = () => {
  const allPets = usePets();
  const { pets, loading } = allPets;

  if (loading) {
    return <Spinner />;
  }

  return (
    
    <div className="grid grid-cols-1  justify-items-center py-5 px-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3 lg:gap-2 xl:grid-cols-4 xl:gap-10" >
      
      {pets.length > 0 ? (
        pets.map((pet) => <PetCard pet={pet} key={pet._id} />)
      ) : (
        <div className="fixed left-1/2 bg-white right-1/2 top-40 flex  w-full -translate-x-1/2 transform flex-col p-10  md:w-1/2">
          <h1 className="text-3xl font-semibold">Result not found!</h1>
          <p className="text-lg font-semibold">
            Sorry, we couldn&#39;t find the pet you&#39;re looking for.
          </p>
          <button className="mt-4 w-32 rounded-full bg-primary p-2 text-white">
            <a href="/" className="flex items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Go back
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
