import { Route, Routes, Link } from "react-router-dom"

import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Drink } from './pages/Drink'
import { Explore } from './pages/Explore'
import { Tutorials } from './pages/Tutorials'
import { Post } from './pages/Post'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {

  return (
    <>
      <nav className="flex flex-wrap flex-row justify-between px-10 py-5 bg-secondary-color text-white">
        <Link to="/"><h1 className="self-center text-3xl text-accent-color">DrinkBaby</h1></Link>
        <ul className="flex flex-wrap flex-row text-lg gap-x-5 self-center">
          <li>
            <Link to="/search" className="">Search</Link>
          </li>
          <li>
            <Link to="/explore" className="">Explore</Link>
          </li>
          <li>
            <Link to="/tutorials" className="">Tutorials</Link>
          </li>
          <li>
            <Link to="/login" className="px-3 py-2 rounded-xl border-2 border-accent-color bg-accent-color">Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Drink />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/tutorials/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <p className="p-5 text-center bg-secondary-color text-accent-color">Remember to drink responsibly!</p>
    </>
  )
}

export default App
