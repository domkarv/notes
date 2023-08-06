import { useEffect, useRef, useState, useMemo } from 'react';

export default function SearchBar() {
  const searchRef = useRef(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=151',
          {
            signal: controller.signal,
          }
        );
        const jsonData = await response.json();
        setPokemonData(jsonData.results);
      } catch (error) {
        if (error.name === 'AbortError') console.log('Fetch aborted');
        else throw error;
      }
    };

    searchRef.current.focus(); // focusing on reload

    fetchPokemonData();

    return () => {
      controller.abort();
    };
  }, []);

  const filteredList = useMemo(() => {
    return pokemonData.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [pokemonData, searchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    /*
    const pokeName = searchRef.current.value.toLowerCase();
    setSearchQuery(pokeName);
    // If you use this then you get the result only when you click 'search'/'enter' button
    // But if you use 'onChange event' then you get the result as you type
    */

    if (filteredList.length === 0) {
      setShowDialog(true);
    }
  };

  const handleDialogBox = () => {
    setShowDialog(false);
    searchRef.current.value = '';
    setSearchQuery('');
    searchRef.current.focus();
  };

  return (
    <div className="m-auto flex min-h-screen select-none flex-col items-center gap-4 bg-[#f8f8ff]">
      <form onSubmit={handleFormSubmit} className="m-4">
        <input
          ref={searchRef}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search..."
          className="rounded-md border border-gray-300 px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-2 rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
      {!showDialog && filteredList.length === 0 && (
        <div className="text-2xl font-bold">Loading...</div>
      )}
      {pokemonData.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
          {filteredList.map((pokemon, ind) => (
            <Card key={ind} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      )}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
          <div className="m-32 w-auto rounded-lg bg-[#f9f9f9] p-6 shadow-xl">
            <h2 className="text-2xl font-bold">Error !</h2>
            <p className="font-semibold">
              {`No pokemon found with name '${searchQuery}'!`}
            </p>
            <div className="flex justify-center">
              <button
                className="mx-auto mt-4 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
                onClick={handleDialogBox}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ name, url }) {
  const id = url.split('/')[6];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="m-4 max-w-sm overflow-hidden rounded shadow-2xl">
      <img className="h-56 w-full object-cover" src={imgUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="mb-2 text-center text-xl font-bold capitalize">
          {name}
        </div>
      </div>
    </div>
  );
}
