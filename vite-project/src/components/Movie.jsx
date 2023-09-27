import React,{useState} from "react";
import { db } from "../firebase";
import { arrayUnion,doc,updateDoc } from "firebase/firestore";
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { UserAuth } from "../context/AuthContext";

const Movie = ({item1}) => {
    const[like,setLike] = useState(false)
    const[saved,setSaved] = useState(false)
    const {user} =UserAuth()
    const movieID =doc(db,'users',`${user?.email}`)
    const saveShow = async()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID,{
          savedShows:arrayUnion({
            id:item1.id,title:item1.title,img:item1.backdrop_path
          })
        } )
      }
      else{
        alert("please login to save movies")
      }
    }
  return (
    <div
      key={item1.id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
    >
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item1?.backdrop_path}`}
        alt={item1?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item1.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300  " />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300  " />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
 