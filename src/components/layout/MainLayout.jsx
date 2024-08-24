import { AppBar } from "../app bar/AppBar"
import { SideBar } from "../side bar/SideBar"
import Drawer from '@mui/material/Drawer';
import { useState } from "react";

export const MainLayout = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return(
        <div>
            <AppBar />
            <div className="flex flex-row mt-3">
                <button onClick={toggleDrawer(true)}>open</button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {/* {DrawerList} */}
                    <div className="container basis-1/6"><SideBar /></div>
                </Drawer>
                <div className="bg-blue-400 basis-5/6">main layout</div>
            </div>
        </div>
    )
}