import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import MovieCard from "./components/MovieCard"

function App() {
  const movieNumber = 1;

  return (
    <>
    {MovieNumber === 1 ? (
      <MovieCard movie={{title:"Tim's Flim",release_date: "2024"}}/>
    ) : (
      <MovieCard movie={{title:"Joe's Flim",release_date: "2024"}}/>
    )}
      <MovieCard movie={{title:"Tim's Flim",release_date: "2024"}}/>
    </>
  )
}


export default App
