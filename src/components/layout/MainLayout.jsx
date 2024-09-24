import { AppBar } from "../app bar/AppBar"
import { SideBar } from "../side bar/SideBar"
import { useState } from "react";
import { MainVideoGrid } from "./MainVideoGrid";
import { CategoriesBar } from "./CategoriesBar";

export const MainLayout = ({children}) => {
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
            <div className="h-16 pb-2"><AppBar open={open} setOpen={setOpen} /></div>
            <div className="flex-grow">
                <div className="flex flex-row h-full">
                    <div className={`${open ? "w-64" : "w-20"}`}> {/* Col1 for SideBar */}
                        <SideBar open={open} />
                    </div>
                        <div className="flex flex-col w-full">
                            <div className="h-12 flex w-full"> {/* Row1 container for CategoriesBar */}
                                <div className="flex w-full"><CategoriesBar /></div>
                                {/* <CategoriesBar /> */}
                            </div>
                        <div className="flex-grow"> {/* Row2 container for MainVideoGrid */}
                            <div className="flex w-full">
                                {/* <MainVideoGrid /> */}
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}