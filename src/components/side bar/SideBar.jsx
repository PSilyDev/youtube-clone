import { SideBarContainer } from "./SideBarContainer"
import { HOME, SHORTS, SUBSCRIPTION } from "./icons.jsx"

export const SideBar = () => {

    return(
        <div className="flex flex-col">
            <button>
                <SideBarContainer icon={HOME.icon} text={HOME.name} />
            </button>
            <button>
                <SideBarContainer icon={SHORTS.icon} text={SHORTS.name} />
            </button>
            <button>
                <SideBarContainer icon={SUBSCRIPTION.icon} text={SUBSCRIPTION.name} />
            </button>
        </div>
    )
}