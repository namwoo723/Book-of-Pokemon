import { useEffect } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import Main from "./pages/Main"
import Detail from "./pages/Detail"
import Search from "./pages/Search"
import Favorite from './pages/Favorite'

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))
  }, [])

  return (
    <>
      <h1 className="border-t-30 border-t-[red] bg-black text-white text-[40px] text-center">포켓몬 도감</h1>
      <nav className="py-2.5 border-b-[3px] flex gap-2.5 justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"favorite/"}>찜목록</Link>
        <div>
          <input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)} className='w-[120px] border-b border-[darkgray] px-2' />
          <span>🔍</span>
        </div>
      </nav>
      <main className="bg-[gray] flex flex-wrap gap-5 justify-center pt-5 pb-5">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:pokemonId"} element={<Detail /> } />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </main>
    </>
  )
}

export default App
