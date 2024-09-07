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
        <div className="bg-red-400 flex flex-nowrap justify-start items-center h-12 w-max">
            {
                categories.map((value, index) => {
                    return (
                        <span key={index} className={`flex items-center bg-green-400 h-8 mx-2 px-3 rounded-lg cursor-pointer ${activeCategory === value.id ? "bg-black text-white" : "hover:bg-gray-200"} active:bg-violet-700`} onClick={() => handleClick(value.id)}>{value.name}</span>
                    )
                })
            }
        </div>
    )
}