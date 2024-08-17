export const SideBarContainer = ({icon, text}) => {

    return(
        <div className="bg-gray-200 flex justify-start h-20 rounded-3xl">
            <div className="flex items-center ml-8">{icon}</div>
            <div className="flex items-center ml-20 text-6xl font-light">{text}</div>
        </div>
    )
}