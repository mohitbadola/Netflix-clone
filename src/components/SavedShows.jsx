import React,{useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';

const SavedShows = () => {
    const {user} = UserAuth();
    const [movies, setMovies] = useState([])

    const slideLeft = ()=>{
        var slider = document.getElementById('slider' )
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = ()=>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const truncateString = (str, num) =>{
        if(str?.length>num){
          return str.slice(0,num) + '....'
        }
        else {
          return str;
        }
      }
 
      useEffect (()=>{
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc)=>{
            setMovies(doc.data()?.saveShows)
        })
      },[user?.email])

      const movieRef = doc(db, 'users', `${user?.email}`)
      const deleteShow = async (passedId) =>{
        try {
            const result = movies.filter((item)=> item.id !== passedId)
            await updateDoc(movieRef,{
                saveShows: result,
            });
        } catch (error) {
            console.log(error)
        }
      }
  return (
    <div>
        <h2 className=' text-gray-200 font-bold text-base md:text-xl p-4'>My Shows</h2>
        <div className=' relative flex items-center group'>
        <AiOutlineDoubleRight 
            onClick={slideRight}
            size={30} 
            className=' text-cyan-100 bg-black left-0 rounded-xl absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
            <div id={'slider' }
             className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id)=>(
                    <div key={id} className=' w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] inline-block cursor-pointer relative p-2'>
                    <img
                       className=' w-full h-auto block'
                    src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                    alt={item?.title}/>
                    <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-60 text-white'>
                      <p className=' px-3 py-2 text-xs md:text-base '>
                          {truncateString(item?.title, 30)}
                      </p>
                      <p onClick={()=> deleteShow(item.id)} className=' absolute text-gray-300 top-4 right-4 text-xl'><AiOutlineClose/></p>
                    </div>
              </div>
                ))}
            </div>
            <AiOutlineDoubleLeft 
            onClick={slideLeft}
            size={30} 
            className=' text-cyan-100 bg-black right-0 rounded-xl absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        </div>
    </div>
  )
}

export default SavedShows