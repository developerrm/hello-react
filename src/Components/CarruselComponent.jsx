import { useState, useEffect, Fragment } from "react";
import React from "react";
import CarruselImag from "./CarruselImag";

export default function CarruselComponent({ title }) {
  const [movies, setMovies] = useState({ categorias: [] });
  useEffect(() => {
    fetch("../peliculas.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.log("Error al cargar json", error));
  }, []);

  return (
    <div>
      <p>{title}</p>
      {movies.categorias.map((categoria) => {
        return (
          <div>
            <p>{categoria.nombre}</p>
            <div style={{display:'flex',paddingLeft:'100px'}}>
            {categoria.peliculas.map((element) => {
              return <CarruselImag url={element.imagen_url} />;
            })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
