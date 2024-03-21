import { useEffect, useState } from "react";

export default function PokemonCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [props.name]);

  if (!pokemon.sprites) {
    return (
      <article className="w-full bg-slate-800 animate-pulse min-h-20"></article>
    );
  }

  return (
    <article className="">
      {!pokemon.sprites && <p> cargando </p>}
      <p className=" font-extralight text-neutral-50/50 hover:font-bold flex flex-col items-center p-2.5">
        <img
          className="pb-4 hover:translate-x-8 hover:translate-y-8 hover:shadow-xl  hover:shadow-rose-900/80 
        bg-[url('https://c.wallhere.com/photos/39/8b/Pok_mon_Pok_Balls_artwork-1368481.jpg!d')] bg-opacity-80 bg-contain bg-fixed hover:bg-none rounded-[15px]"
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt=""
        />

        {props.name.toUpperCase()}
      </p>
    </article>

    /**/

    /*  {pokemon.sprites && (
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt=""
        />
      )}
      <p>{props.name}</p>*/
  );
}
