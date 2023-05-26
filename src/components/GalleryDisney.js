import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const GalleryDisney = () => {
  const titleGallery = "films du studio ghibli";

  const [dataGhibli, setDataGhibli] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getData() {
      fetch("https://api.disneyapi.dev/character", {
        signal,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      return () => {
        controller.abort();
      };
    }

    getData();
  }, [setDataGhibli]);
  //   return (
  //     <div className="gallery">
  //       <h2 className="gallery__title">{titleGallery.toUpperCase()}</h2>
  //       <ul className="gallery__films">
  //         {dataGhibli.map((film, i) => (
  //           <Cards key={i} film={film} />
  //         ))}
  //       </ul>
  //     </div>
  //   );
};

export default GalleryDisney;
