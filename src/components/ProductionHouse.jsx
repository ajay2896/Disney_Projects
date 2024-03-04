
import React from "react";
import disney from "../assets/Images/disney.png";
import marvel from "../assets/Images/marvel.png";
import nationalG from "../assets/Images/nationalG.png";
import pixar from "../assets/Images/pixar.png";
import starwar from "../assets/Images/starwar.png";
import disneyV from "../assets/Videos/disneyV.mp4";
import marvelV from "../assets/Videos/marvelV.mp4";
import nationalgV from "../assets/Videos/nationalgV.mp4";
import pixarV from "../assets/Videos/pixarV.mp4";
import starWarsV from "../assets/Videos/starWarsV.mp4";


function ProductionHouse() {

    const productionHousList = [
        { id: 1, image: disney, video: disneyV },
        { id: 2, image: marvel, video: marvelV },
        { id: 3, image: nationalG, video: nationalgV },
        { id: 4, image: pixar, video: pixarV },
        { id: 5, image: starwar, video: starWarsV }
    ];

    return (
        <>
            <div className="flex gap-2 md:gap-8 p-2 px-5 md:px-16">
                {
                    productionHousList.map((item) => (
                        <div className="border-[2px] border-grey-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out shadow-xl shadow-black">
                            <video src={item.video} autoPlay loop playsInline className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50" />
                            <img src={item.image} className="w-full z-[1]" />
                        </div>
                    ))
                }
            </div>
        </>
    );

}

export default ProductionHouse;