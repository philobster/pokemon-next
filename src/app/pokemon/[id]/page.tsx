import { PokemonDetail } from "@/types/pokemon";
import Link from "next/link";

const capitalize = (str: string) => (str.charAt(0).toUpperCase() + str.slice(1)).replace("-", " ");
const addSpaces = (str: string) => str.replace("-", " ");

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return { title: `${capitalize(data.name)} — Pokémon Browser` };
}

export default async function PokemonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: PokemonDetail = await res.json();

  const type1 = data.types[0].type.name;
  const type2 = data.types[1]?.type.name;

  const typeBorder = [
    `var(--color-${type1}-l-type)`,
    type2 ? `var(--color-${type2}-l-type)` : `var(--color-${type1}-l-type)`
  ];

  const typeBg = [
    `var(--color-${type1}-d-type)`,
    type2 ? `var(--color-${type2}-d-type)` : `var(--color-${type1}-d-type)`
  ];

  return (
    <div className="max-w-2xl mx-auto">
        <div className="flex justify-start ml-4 mt-2">
            <Link href="/pokemon" className="rounded-full px-4 py-2 text-2xl bg-gray-950 shadow-lg border-gray-900 border 
                                                transition-all duration-200
                                                [@media(hover:hover)]:hover:border-gray-700
                                                [@media(hover:hover)]:hover:-translate-y-0.5
                                                active:border-gray-700
                                                active:-translate-y-0.5
                                                focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600">
                Back
            </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 text-gray-100">
            <div className="m-4 mb-0 border-solid rounded-sm bg-gray-950 shadow-lg border-gray-900 border flex justify-center">
                <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
            </div>
            <div className="flex flex-col items-center gap-2 border-solid rounded-sm bg-gray-950 m-4 mt-0 p-4 shadow-lg border-gray-900 border">
                <div>
                    <h1 className="font-extrabold text-xl">{capitalize(data.name)}</h1>
                </div>
                <div className="flex gap-4">
                    <p>Height: {data.height / 10}m</p>
                    <p>Weight: {data.weight / 10}kg</p>
                </div>
                <div className="flex gap-2">
                    {data.types.map((type) => {
                        return <div style={{ background: typeBg[type.slot - 1], borderColor: typeBorder[type.slot - 1], color: typeBorder[type.slot - 1] }} className="rounded-full border border-solid px-3 py-1" key={type.slot}>{(type.type.name)}</div>;
                    })}
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {data.stats.map((stat) => (
                        <div key={stat.stat.name} className="contents">
                            <span className="text-right font-medium">{capitalize(stat.stat.name)}</span>
                            <span className="text-left font-mono">{stat.base_stat}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                    {data.abilities.map(({ ability }) => (
                        <div className="rounded-sm bg-rose-900 px-3 py-1 text-rose-100" key={ability.name}>{(addSpaces(ability.name.toUpperCase()))}</div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}