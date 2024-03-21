import { useEffect, useState } from "react";
import PokemonCard from "./components/PokeCard";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => response.json())
      .then((json) => {
        setPokemons(json.results);
      })
      .catch((error) => {
        console.error("Error fetching" + error);
      });
  }, []);

  return (
    <main className=" bg-slate-950 text-slate-300 min-h-screen flex flex-col items-center p-10 gap-10">
      <header className="">
        <img
          className="w-full max-w-sm"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokemonLogo"
        />
      </header>

      <section className="grid grid-cols-3 gap-4 w-full max-w-screen-md ">
        {pokemons.map((pokemon, index) => {
          return <PokemonCard key={`pokemon-${index}`} name={pokemon.name} />;
        })}
      </section>
    </main>
  );
}
