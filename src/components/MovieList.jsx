
import React, { useEffect, useState,useRef } from "react";
import GlobalApis from "../services/GlobalApis";
import MovieCard from "./MovieCard";
import { HiChevronLeft,HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";
const screenWidth = window.innerWidth;


function MovieList({ generId, index_value }) {

    const [movieList, setMovieList] = useState([]);

    const elementRef = useRef();


    useEffect(() => {
        getMovieByGenerId();
    }, [])


    const getMovieByGenerId = () => {
        GlobalApis.getMoviesByGenreId(generId).then((response) => {

            setMovieList(response.data.results);

        }).catch((error) => {
            console.log(error);
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }

    return (
        <>

            <div>

                <HiChevronLeft onClick={() => sliderLeft(elementRef.current)} className={`hidden md:block text-white text-[30px] absolute mx-8 ${index_value%3==0? 'mt-[80px]': 'mt-[150px]'} cursor-pointer left-0`} />

                <HiChevronRight onClick={() => sliderRight(elementRef.current)} className={`hidden md:block text-white text-[25px] absolute mx-8 ${index_value%3==0? 'mt-[80px]': 'mt-[150px]'} cursor-pointer right-0`} />

                <div ref={elementRef} className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-8 py-5 px-3">
                    {
                        movieList.map((item, index) => (
                            <>
                                {
                                    index_value % 3==0 ?  <HrMovieCard movie={item} />   : <MovieCard movie={item} />
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );

}

export default MovieList;