import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";

import Movie from "./Movie";

const Row = ({ title, fetchURL,rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
//   console.log(movies);
const slideLeft=()=>{
    var slider = document.getElementById('slider'+rowID)
    slider.scrollLeft = slider.scrollLeft-500
}
const slideRight= ()=>{
var slider = document.getElementById('slider'+rowID)
slider.scrollLeft = slider.scrollLeft+500
}

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className="group-hover:block bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden hover:block" size={40}/>
        <div
          className="w-full h-full overflow-x-scroll relative whitespace-nowrap scroll-smooth scrollbar-hide"
          id={'slider'+rowID}
        >
          {movies.map((item, id) => (
            <Movie key={id} item1={item} />
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className="right-0 group-hover:block bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden hover:block" size={40}/>
      </div>
    </>
  );
};

export default Row;
