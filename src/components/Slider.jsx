
import GlobalApis from '../services/GlobalApis'
import { useEffect, useRef, useState } from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

function Slider() {

    const [moviesList, setMoviesList] = useState([]);

    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApis.getTrendingVideos.then((response) => {

            // console.log("All Movies", response.data.results);

            setMoviesList(response.data.results);

        }).catch((error) => {

            console.log("Error", error);

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
                <HiChevronLeft onClick={() => sliderLeft(elementRef.current)} className='hidden md:block text-white text-[40px] absolute mx-8 mt-[200px] cursor-pointer' />

                <HiChevronRight onClick={() => sliderRight(elementRef.current)} className='hidden md:block  text-white text-[40px] absolute mx-8 mt-[200px] cursor-pointer right-0' />

                <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
                    {
                        moviesList.map((item) => (
                            <img src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full md:h-[400px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
                        ))
                    }
                </div>
            </div>
        </>
    );

}

export default Slider;