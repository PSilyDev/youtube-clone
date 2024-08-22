import { AppBar } from "../app bar/AppBar"
import { SideBar } from "../side bar/SideBar"

export const MainLayout = () => {
    return(
        <div>
            <AppBar />
            <div className="flex flex-row mt-3">
                <div className="container basis-1/6"><SideBar /></div>
                <div className="bg-blue-400 basis-5/6">main layout</div>
            </div>
        </div>
    )
}