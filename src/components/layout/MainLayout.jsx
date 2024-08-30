import { AppBar } from "../app bar/AppBar"
import { SideBar } from "../side bar/SideBar"
// import Drawer from '@mui/material/Drawer';
import { useState } from "react";

export const MainLayout = () => {
    const [open, setOpen] = useState(false);

    // const toggleDrawer = (newOpen) => () => {
    //     setOpen(newOpen);
    // };

    return(
        <div>
            {/* <AppBar /> */}
            <div className="flex mt-3">
                {/* <button onClick={toggleDrawer(true)}>open</button> */}
                {/* <Drawer open={open} onClose={toggleDrawer(false)}> */}
                    {/* {DrawerList} */}
                <div className={`h-screen bg-green-400 p-3 pt-8 relative ${open ? "w-64" : "w-20"}`}>
                    <button className="absolute -right-5 top-1 bg-white rounded-full" onClick={() => setOpen(!open)}>
                        <svg className="w-10 h-10 p-2 hover:bg-gray-200 hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                    </button>
                    <SideBar open={open} />
                    {/* <div className="mt-4">
                        <svg className="w-10 h-10 rounded cursor-pointer block float-left mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#000000" d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                        <h1 className={`origin-left ${open ? "text-2xl font-medium" : "text-md font-normal"}`}>Home</h1>
                    </div> */}
                </div>
                {/* </Drawer> */}
                <div className="bg-blue-400 basis-5/6">main layout</div>
            </div>
        </div>
    )
}