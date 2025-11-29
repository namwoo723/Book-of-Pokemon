import { getRegExp } from "korean-regexp"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { selectPokemonByRegExp } from "../RTK/selector"
import { Card } from "../component/Card"

export default function Search() {
  const [searchParams] = useSearchParams()
  searchParams.get("pokemon")
  const reg = getRegExp(param)

  const pokemon = useSelector(selectPokemonByRegExp())
  console.log(pokemon)
  return (
    <>
      {pokemonData.map(el => <Card key={el.id} pokemon={el} />)}
    </>
  )
}