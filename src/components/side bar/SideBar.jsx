import { SideBarContainer } from "./SideBarContainer"
import { HOME, SHORTS, SUBSCRIPTION, HISTORY, PLAYLISTS, WATCHLATER, LIKEDVIDEOS, SETTINGS, REPORTHISTORY, HELP, SENDFEEDBACK, YOU } from "./icons.jsx"

export const SideBar = ({open}) => { // always pass open as {open} bool and not open(which act as object)

    return(
        <div className="flex flex-col pt-8">            
            {/* main tiles */}
            {/* updated */}
            <button className="hover:bg-gray-200 rounded-xl">
                <SideBarContainer icon={HOME.icon} text={HOME.name} open={open} />
            </button>
            <button className="hover:bg-gray-200 rounded-xl">
                <SideBarContainer icon={SHORTS.icon} text={SHORTS.name} open={open} />
            </button>
            <button className="hover:bg-gray-200 rounded-xl">
                <SideBarContainer icon={SUBSCRIPTION.icon} text={SUBSCRIPTION.name} open={open} />
            </button>
           
            {open && <hr className="self-center w-11/12 border-t border-gray-300 my-4" />}

            {/* you tiles */}
            {open ?
            (<button className="hover:bg-gray-200 rounded-xl">
                <div className= "mx-3 flex justify-start items-center h-11 rounded-xl hover:bg-gray-200">
                    <div className="font-semi text-lg ml-5">You &#62;</div>
                </div>
            </button>) :
            (<button className="hover:bg-gray-200 rounded-xl">
                <SideBarContainer icon={YOU.icon} text={YOU.name} open={open} />
            </button>
            )}
            {
                open &&
                (
                    <>
                        <button className="hover:bg-gray-200 rounded-xl">
                            <SideBarContainer icon={HISTORY.icon} text={HISTORY.name} open={open} />
                        </button>
                        <button className="hover:bg-gray-200 rounded-xl">
                            <SideBarContainer icon={PLAYLISTS.icon} text={PLAYLISTS.name} open={open} />
                        </button>
                        <button className="hover:bg-gray-200 rounded-xl">
                            <SideBarContainer icon={WATCHLATER.icon} text={WATCHLATER.name} open={open} />
                        </button>
                        <button className="hover:bg-gray-200 rounded-xl">
                            <SideBarContainer icon={LIKEDVIDEOS.icon} text={LIKEDVIDEOS.name} open={open} />
                        </button>
                   

                        {open && <hr className="self-center w-11/12 border-t border-gray-300 my-4" open={open} />}

                        {/* settings */}
                        <button className="hover:bg-gray-200 rounded-xl">
                            <SideBarContainer icon={SETTINGS.icon} text={SETTINGS.name} open={open} />
                        </button>
                        <button className="hover:bg-gray-200 rounded-xl">
                            <SideBarContainer icon={REPORTHISTORY.icon} text={REPORTHISTORY.name} open={open} />
                        </button>
                        <button className="hover:bg-gray-200 rounded-xl">
                            <SideBarContainer icon={HELP.icon} text={HELP.name} open={open} />
                        </button>
                        <button className="hover:bg-gray-200 rounded-xl">
                            <SideBarContainer icon={SENDFEEDBACK.icon} text={SENDFEEDBACK.name} open={open} />
                        </button>
                    </>
                )
            }
        </div>
    )
}