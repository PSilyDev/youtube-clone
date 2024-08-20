import { SideBarContainer } from "./SideBarContainer"
import { HOME, SHORTS, SUBSCRIPTION, HISTORY, PLAYLISTS, WATCHLATER, LIKEDVIDEOS } from "./icons.jsx"

export const SideBar = () => {

    return(
        <div className="flex flex-col">
            {/* main tiles */}
            <button>
                <SideBarContainer icon={HOME.icon} text={HOME.name} />
            </button>
            <button>
                <SideBarContainer icon={SHORTS.icon} text={SHORTS.name} />
            </button>
            <button>
                <SideBarContainer icon={SUBSCRIPTION.icon} text={SUBSCRIPTION.name} />
            </button>
            
            <hr className="self-center w-11/12 border-t border-gray-300 mt-6" />

            {/* you tiles */}
            <button>
                <div className= "mt-5 flex justify-start items-center h-20 rounded-3xl hover:bg-gray-200">
                    <div className="font-semibold text-2xl ml-10">You ></div>
                </div>
            </button>
            <button>
                <SideBarContainer icon={HISTORY.icon} text={HISTORY.name} />
            </button>
            <button>
                <SideBarContainer icon={PLAYLISTS.icon} text={PLAYLISTS.name} />
            </button>
            <button>
                <SideBarContainer icon={WATCHLATER.icon} text={WATCHLATER.name} />
            </button>
            <button>
                <SideBarContainer icon={LIKEDVIDEOS.icon} text={LIKEDVIDEOS.name} />
            </button>
        </div>
    )
}