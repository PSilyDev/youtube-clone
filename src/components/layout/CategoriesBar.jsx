import { useState } from "react";

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

    const handleClick = (id) => {
        console.log('id - ', id);
        setActiveCategory(id);
    }

    return(
        <div className="relative flex flex-nowrap justify-start items-center h-12 w-max">
            {
                categories.map((value, index) => {
                    return (
                        <span key={index} className={`flex items-center h-8 mx-2 px-3 rounded-lg cursor-pointer ${activeCategory === value.id ? "bg-black text-white" : " hover:bg-gray-200"}`} onClick={() => handleClick(value.id)}>{value.name}</span>
                        
                    )
                })
            }
            <div className="absolute inset-x-1/2 transform -translate-x-16 w-20 h-8 flex items-center justify-center z-10 rounded-full backdrop-blur">
                <svg className="w-8 h-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#b9bcc0" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>
            </div>
        </div>
    )
}