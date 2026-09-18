import { PokemonListItem, PokemonListResponse } from "@/types/pokemon";
import Link from "next/link";
import { PokemonBrowser } from "./PokemonBrowser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokémon Browser",
};

export default async function PokemonPage() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data: PokemonListResponse = await res.json();

    return <PokemonBrowser pokemonList={data.results} />;
}