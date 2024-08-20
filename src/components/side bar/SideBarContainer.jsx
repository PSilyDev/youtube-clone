export const SideBarContainer = ({icon, text}) => {
    
    return(
        <div className= "flex justify-start items-center h-20 rounded-3xl hover:bg-gray-200">
            <div className="flex items-center ml-8 rounded-full bg-red-400 h-14 w-14 p-2">{icon}</div>
            <div className="flex items-center ml-20 text-6xl font-light">{text}</div>
        </div>
    )
}