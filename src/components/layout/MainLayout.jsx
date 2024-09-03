import { AppBar } from "../app bar/AppBar"
import { SideBar } from "../side bar/SideBar"
import { useState } from "react";

export const MainLayout = () => {
    const [open, setOpen] = useState(false);

    return(
        <div>
            <div className="flex mt-3">
                <div className={`h-screen bg-green-400 p-3 pt-8 relative ${open ? "w-64" : "w-20"}`}>
                    <button className="absolute -right-5 top-1 bg-white rounded-full" onClick={() => setOpen(!open)}>
                        <svg className="w-10 h-10 p-2 hover:bg-gray-200 hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>
                    <SideBar open={open} />
                </div>
                {/* </Drawer> */}
                <div className="bg-blue-400 basis-5/6">Main Layout</div>
            </div>
        </div>
    )
}