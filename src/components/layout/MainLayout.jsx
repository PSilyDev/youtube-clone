import { AppBar } from "../app bar/AppBar"
import { SideBar } from "../side bar/SideBar"
import { useState } from "react";

export const MainLayout = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className="flex flex-col h-screen">
            <div className="bg-red-400 basis-1/12">appbar</div>
            <div className="flex bg-green-400 basis-11/12">
                {/* sidebar */}
                <div className={`h-full bg-green-400 relative ${open ? "w-64 p-3" : "w-20"}`}>
                    {/* sidebar button */}
                    <button className="absolute -right-5 top-1 bg-white rounded-full" onClick={() => setOpen(!open)}>
                        <svg className="w-10 h-10 p-2 hover:bg-gray-200 hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>
                    <SideBar open={open} />
                </div>
                {/* Main Layout */}
                <div className="bg-blue-400 w-screen">Main Layout</div>
            </div>
        </div>
    )
}