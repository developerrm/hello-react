import BusquedaPeliculaComponent from "./BusquedaPeliculaComponent";
import { useState, useEffect, Fragment } from "react";
import React from "react";
import CarruselImag from "./CarruselImag";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function CarruselComponent({ title }) {
  const [movies, setMovies] = useState({ categorias: [] });
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/peliculas.json`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.log("Error al cargar json", error);
      });
  }, []);

  const [textUpdated, setTextUpdated] = useState();
  const Buscar = (data) => {
    setTextUpdated(data);
    // console.log(textUpdated);
    // console.log(typeof(textUpdated));
  };

  return (
    <div>
      <div style={{display:"flex", alignItems:"center", fontSize:"2rem", justifyContent:"space-between"}}>

      <p style={{color:'red'}} >{title}</p>
      <BusquedaPeliculaComponent eventHandlerBuscar={Buscar} />
      </div>
      {movies.categorias.map((categoria) => {
        return (
          <div style={{ alignItems: "center" }}>
            <p >{categoria.nombre}</p>
            <div style={{ margin: "0px 10%" }}>
              <Swiper
                slidesPerView={8}
                centeredSlides={false}
                slidesPerGroupSkip={3}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  1020: {
                    slidesPerView: 10,
                    slidesPerGroup: 3,
                  },
                  769: {
                    slidesPerView: 5,
                    slidesPerGroup: 3,
                  },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
              >
                {categoria.peliculas
                  .filter((pelicula) => {
                    return (!textUpdated || textUpdated==="" )
                      ? pelicula
                      : (pelicula.titulo
                          .toLowerCase().indexOf(textUpdated.toLowerCase())!==-1
                          
                      ? pelicula
                      : null);
                  })
                  .map((pelicula) => {
                    return (
                      <>
                        <SwiperSlide key={pelicula.titulo}>
                          <CarruselImag
                            url={pelicula.imagen_url}
                            alt={pelicula.titulo}
                          />
                        </SwiperSlide>
                      </>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        );
      })}
    </div>
  );
}
