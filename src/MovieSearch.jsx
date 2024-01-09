import React, { useState } from "react";
import {handleFetch} from './data/fetchHandler'

export const MovieSearch = () => {
  const url = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "c5f9eea6c930c50786fc1a59db4b95f4";

  const [buscador, setBuscador] = useState("");

  const [peliculas, setPeliculas] = useState([]);

  const handleOnChange = (e) => {
    setBuscador(e.target.value);
  };

  const HandleOnSubmit = async (e) => 
  {

    e.preventDefault();
    if (buscador.length > 0)
    {
      const newData = await handleFetch(url,buscador,API_KEY);
      setPeliculas(newData);
    } 

  };


  return (
    <div className="container">
      <h1 className="title">Buscador de Películas</h1>
      <form onSubmit={HandleOnSubmit}>
        <input
          placeholder="Ingrese el nombre de la película"
          type="text"
          value={buscador}
          onChange={handleOnChange}
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="movie-list">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img
              src={
                pelicula.poster_path
                  ? ` https://image.tmdb.org/t/p/w500${pelicula.poster_path}`
                  : `buscar.png`
              }
              alt={pelicula.title}
            />
            <h2>{pelicula.title}</h2>
            <p>{pelicula.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
