import { Route, Routes, Link } from "react-router-dom"

import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { Drink } from './pages/Drink'
import { Explore } from './pages/Explore'
import { Tutorials } from './pages/Tutorials'
import { Post } from './pages/Post'
import { Login } from './components/LoginModal'
import { Register } from './pages/Register'
import { useState } from "react"


function App() {

  const [loginModal, setLoginModal] = useState(false);

  return (
    <div>
      <nav className="px-10 py-5 bg-secondary-color lg:sticky lg:top-0 lg:z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between text-white"> 
          <Link to="/" 
            className="flex flex-row justify-center pb-5 md:pb-0 md:justify-start"
            style={loginModal ? {pointerEvents: "none"} : null}
          >
            <img src="https://cdn.pixabay.com/photo/2016/05/27/10/51/cocktails-1419481_1280.png"
                className="object-cover h-12 w-30"
            />
            <h1 className="ml-3 self-end text-3xl text-accent-color">DrinkBaby</h1>
          </Link>

          <ul className="flex flex-wrap flex-col md:flex-row text-lg gap-x-5 self-center items-center text-center gap-3">
            <li>
              <Link to="/search" className="" style={loginModal ? {pointerEvents: "none"} : null}>Search</Link>
            </li>
            <li>
              <Link to="/explore" className="" style={loginModal ? {pointerEvents: "none"} : null}>Explore</Link>
            </li>
            <li>
              <Link to="/tutorials" className="" style={loginModal ? {pointerEvents: "none"} : null}>Tutorials</Link>
            </li>
            <li>
              <button 
                className="px-3 py-1 rounded-xl border-2 border-accent-color bg-accent-color"
                onClick={() => setLoginModal(true)}
              >
                Login
              </button>
            </li>
          </ul>

        </div>
      </nav>

      {
        loginModal && (
          <Login modalOpen={setLoginModal} />
        )
      }
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Drink />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/tutorials/:id" element={<Post />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <p className="p-5 text-center bg-secondary-color text-accent-color">Remember to drink responsibly!</p>
    </div>
  )
}

export default App
