"use client";

import { PokemonListItem } from "@/types/pokemon";
import { useState } from "react";
import Link from "next/link";

const capitalize = (str: string) => (str.charAt(0).toUpperCase() + str.slice(1)).replace("-", " ");

function extractIdFromUrl(url: string) {
    return url.split('/').filter(Boolean).pop() ?? '';
}

export function PokemonBrowser({ pokemonList }: { pokemonList: PokemonListItem[] }) {
    const [search, setSearch] = useState<string>('');

    const filtered = pokemonList.filter((pokemon) => 
        pokemon.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    return (
        <div className="m-4 mt-2">
            <div className="flex justify-center mb-2">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Pokémon"
                    className="text-2xl rounded-full bg-gray-950 border border-gray-800 px-4 py-2 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-600/30"
                />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mx-8 my-4">
                {filtered.map((pokemon: PokemonListItem) => {
                    const id = extractIdFromUrl(pokemon.url);
                    return (
                        <Link href={`/pokemon/${id}`} key={pokemon.name} className="flex flex-col items-center bg-gray-950 rounded-sm p-4
                                                                            border border-gray-900
                                                                            transition-all duration-200
                                                                            [@media(hover:hover)]:hover:border-gray-700
                                                                            [@media(hover:hover)]:hover:-translate-y-0.5
                                                                            active:border-gray-700
                                                                            active:-translate-y-0.5
                                                                            focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt=''></img>
                            <p className="font-semibold text-gray-100">{capitalize(pokemon.name)}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}