import { useState } from 'react'
import "./css/App.css"
import MovieCard from "./components/MovieCard"

function App() {

  const movieNumber = 2;

  return (
    <>
      <h1>Hello Jarvis =% </h1>
      {movieNumber===1 ? (
          <MovieCard movie={{title: "Tim's Film", release_date: "2024"}} />
      ) : (
        <MovieCard movie={{title: "Sam's Wit", release_date: "2023 and beyond"}} />
      )
    }
      
    </> 
  );
}



export default App

