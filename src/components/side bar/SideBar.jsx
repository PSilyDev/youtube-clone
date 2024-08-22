import { SideBarContainer } from "./SideBarContainer"
import { HOME, SHORTS, SUBSCRIPTION, HISTORY, PLAYLISTS, WATCHLATER, LIKEDVIDEOS, SETTINGS, REPORTHISTORY, HELP, SENDFEEDBACK } from "./icons.jsx"

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
            
            <hr className="self-center w-11/12 border-t border-gray-300 mt-4" />

            {/* you tiles */}
            <button>
                <div className= "mt-2 mx-3 flex justify-start items-center h-11 rounded-xl hover:bg-gray-200">
                    <div className="font-semi text-lg ml-5">You &#62;</div>
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
        

            <hr className="self-center w-11/12 border-t border-gray-300 my-4" />

            {/* settings */}
            <button>
                <SideBarContainer icon={SETTINGS.icon} text={SETTINGS.name} />
            </button>
            <button>
                <SideBarContainer icon={REPORTHISTORY.icon} text={REPORTHISTORY.name} />
            </button>
            <button>
                <SideBarContainer icon={HELP.icon} text={HELP.name} />
            </button>
            <button>
                <SideBarContainer icon={SENDFEEDBACK.icon} text={SENDFEEDBACK.name} />
            </button>
        </div>
    )
}