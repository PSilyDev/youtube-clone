import { AppBar } from "../app bar/AppBar"
import { SideBar } from "../side bar/SideBar"
import { useState } from "react";
import { MainVideoGrid } from "./MainVideoGrid";
import { CategoriesBar } from "./CategoriesBar";

export const MainLayout = () => {
    const [open, setOpen] = useState(true);

    return(
        // <div className="flex flex-col h-screen">
        //     <div className="basis-16"><AppBar open={open} setOpen={setOpen} /></div>
        //     <div className="flex basis-11/12 justify-end bg-green-400">
        //         {/* sidebar */}
        //         <div className={`items-start bg-blue-400 h-full relative ${open ? "w-64 p-3" : "w-20"}`}>
        //             <SideBar open={open} />
        //         </div>
        //         {/* Main Layout */}
        //         <div className="flex flex-col w-11/12">
        //             <div className="border-8"><CategoriesBar /></div>
        //             <div className="self-center"><MainVideoGrid /></div>
        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col h-screen">
            <div className="bg-red-400 h-16"><AppBar open={open} setOpen={setOpen} /></div>
            <div className="bg-green-400 flex-grow">
                <div className="flex flex-row h-full">
                    <div className={`bg-yellow-400 ${open ? "w-64" : "w-20"}`}>col1</div>
                        <div className="flex flex-col w-full">
                            <div className="h-12"> {/* Row1 container for CategoriesBar */}
                                <CategoriesBar />
                            </div>
                        <div className="bg-gray-400 flex-grow">row2</div>
                    </div>
                </div>
            </div>
        </div>

    )
}