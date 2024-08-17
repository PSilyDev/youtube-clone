import { SideBarContainer } from "./SideBarContainer"
import { HOME, SHORTS, SUBSCRIPTION } from "./icons.jsx"

export const SideBar = () => {

    return(
        <div className="flex flex-col">
            <div className=""><SideBarContainer icon={HOME.icon} text={HOME.name} /></div>
            <div className=""><SideBarContainer icon={SHORTS.icon} text={SHORTS.name} /></div>
            <div className=""><SideBarContainer icon={SUBSCRIPTION.icon} text={SUBSCRIPTION.name} /></div>
        </div>
    )
}