import { useEffect, useRef, useState } from "react";

const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Music" },
    { id: 3, name: "Gaming" },
    { id: 4, name: "News" },
    { id: 5, name: "Movies" },
    { id: 6, name: "Live" },
    { id: 7, name: "Sports" },
    { id: 8, name: "Education" },
    { id: 9, name: "Technology" },
    { id: 10, name: "Fashion" },
    { id: 11, name: "Travel" },
    { id: 12, name: "Food" },
    { id: 13, name: "Comedy" },
    { id: 14, name: "Art" },
    { id: 15, name: "Science" },
    { id: 16, name: "Health & Fitness" },
    { id: 17, name: "DIY & Crafts" },
    { id: 18, name: "Vlogs" },
    { id: 19, name: "Cars & Vehicles" },
    { id: 20, name: "Pets & Animals" },
    { id: 21, name: "Nature" },
    { id: 22, name: "History" },
    { id: 23, name: "Animation" },
    { id: 24, name: "Documentaries" },
    { id: 25, name: "Business & Finance" },
    { id: 26, name: "Podcasts" },
    { id: 27, name: "Lifestyle" },
    { id: 28, name: "Short Films" },
    { id: 29, name: "Horror" },
    { id: 30, name: "Kids" },
  ];
  

export const CategoriesBar = () => {

    const [activeCategory, setActiveCategory] = useState(1);
    const [rightArrowClicked, setRightArrowClicked] = useState(false);
    const [isAtStart, setIsAtStart] = useState(true);

    const scrollRef = useRef(null);

    const handleClick = (id) => {
        console.log('id - ', id);
        setActiveCategory(id);
    }

    const handleRightArrowClicked = () => {
        setRightArrowClicked(true);
        if(scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    }

    const handleLeftArrowClicked = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
              left: -200, 
              behavior: "smooth",
            });
          }
    }

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            setIsAtStart(scrollRef.current.scrollLeft === 0);
        }
    };

    useEffect(() => {
        const container = scrollRef.current;

        container.addEventListener("scroll", checkScrollPosition);

        return () => {
            container.removeEventListener("scroll", checkScrollPosition);
        }
    }, []);

    return(
        // <div className="relative flex flex-nowrap justify-start items-center h-12 w-max">
        //     <button className="absolute inset-x-1/2 transform w-20 h-8 flex items-center justify-center z-10 rounded-full backdrop-blur">
        //         <svg className="w-8 h-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#403f3f" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        //     </button>
        //     {
        //         categories.map((value, index) => {
        //             return (
        //                 <span key={index} className={`flex items-center h-8 mx-2 px-3 rounded-lg cursor-pointer ${activeCategory === value.id ? "bg-black text-white" : " hover:bg-gray-200"}`} onClick={() => handleClick(value.id)}>{value.name}</span>
                        
        //             )
        //         })
        //     }
        //     <button className="absolute inset-x-1/2 transform -translate-x-16 w-20 h-8 flex items-center justify-center z-10 rounded-full backdrop-blur" onClick={handleScroll}>
        //         <svg className="w-8 h-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#403f3f" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        //     </button>
        // </div>
        <div className="bg-red-400 absolute flex justify-between items-center cursor-pointer rounded-md h-12 p-2 flex-grow flex-shrink-0">
            {/* <!-- Left arrow --> */}
            {!isAtStart && (
            <div className={`absolute bg-gradient-to-l from-transparent via-white to-white flex items-center absolute h-full w-24 px-3 top-0 left-0 z-20`}>
                <svg className="w-10 h-10 hover:bg-gray-200 rounded-full py-3 z-10" onClick={handleLeftArrowClicked} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="#403f3f" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                </svg>
            </div>
            )}

            {/* <!-- Scrollable content --> */}
            <div ref={scrollRef} className="flex justify-start items-center ml-1 overflow-x-scroll no-scrollbar w-full">
                {
                    categories.map((value, index) => {
                        return (
                            <span key={index} className={`flex items-center font-sans h-8 min-w-max w-max mx-1 px-3 rounded-lg cursor-pointer ${activeCategory === value.id ? "bg-black text-white" : "hover:bg-gray-200"}`} onClick={() => handleClick(value.id)}>
                                {value.name}
                            </span>
                        )
                    })
                }
            </div>

            {/* <!-- Right arrow --> */}
            <div className="absolute bg-gradient-to-r from-transparent via-white to-white flex justify-end items-center absolute h-full w-24 right-0 px-3 z-20">
                <svg className="w-10 h-10 hover:bg-gray-200 rounded-full py-3 z-10" onClick={handleRightArrowClicked} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="#403f3f" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                </svg>
            </div>
        </div>

    )
}