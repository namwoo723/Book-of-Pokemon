import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"
import { useSelector } from "react-redux"

export default function Detail() {
  const { pokemonId } = useParams()
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
  
  if (!pokemon) return <p>포켓몬 정보를 찾을 수 없습니다.</p>;
  console.log(pokemon);
  return (
    <div className="flex flex-col justify-center items-center border border-[gray] p-[30px] rounded-[10px]">
      <div className="text-[28px] mb-2.5">{pokemon.name}</div>
      <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
      <img className="w-[200px]" src={pokemon.front} />
    </div>
  )
} 