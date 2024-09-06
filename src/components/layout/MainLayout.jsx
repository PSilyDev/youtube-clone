import { AppBar } from "../app bar/AppBar"
import { SideBar } from "../side bar/SideBar"
import { useState } from "react";
import { VideoGrid } from "../video display/VideoGrid";

export const MainLayout = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className="flex flex-col h-screen">
            <div className="basis-16"><AppBar open={open} setOpen={setOpen} /></div>
            <div className="flex basis-11/12">
                {/* sidebar */}
                <div className={`h-full relative ${open ? "w-64 p-3" : "w-20"}`}>
                    <SideBar open={open} />
                </div>
                {/* Main Layout */}
                <div className="w-screen"><VideoGrid /></div>
            </div>
        </div>
    )
}