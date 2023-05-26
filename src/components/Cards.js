import React from "react";

const Cards = ({ film }) => {
  return (
    <li style={{ cursor: "pointer" }} className="gallery__cards">
      <img className="gallery__image" src={film.poster} alt={film.title} />
      <article className="gallery__cards__infos">
        <h4 className="gallery__cards__title">{film.title}</h4>
        <p className="gallery__cards__genre">{film.genre}</p>
        <p className="gallery__cards__release">{film.release}</p>
        <p className="gallery__cards__synopsis">{film.synopsis}</p>
        <p className="gallery__cards__review">{film.reviews.imdb}</p>
      </article>
    </li>
  );
};

export default Cards;
