import { AppBar } from "../app bar/AppBar"
import { SideBar } from "../side bar/SideBar"
import { useState } from "react";

export const MainLayout = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className="flex flex-col h-screen">
            <div className="basis-16"><AppBar open={open} setOpen={setOpen} /></div>
            <div className="flex bg-green-400 basis-11/12">
                {/* sidebar */}
                <div className={`h-full bg-green-400 relative ${open ? "w-64 p-3" : "w-20"}`}>
                    <SideBar open={open} />
                </div>
                {/* Main Layout */}
                <div className="bg-blue-400 w-screen">Main Layout</div>
            </div>
        </div>
    )
}