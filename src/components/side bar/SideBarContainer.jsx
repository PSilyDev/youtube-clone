export const SideBarContainer = ({icon, text}) => {
    
    return(
        <div className= "flex justify-start items-center h-11 mx-3 rounded-xl hover:bg-gray-200">
            <div className="flex items-center rounded-full h-8 w-8 p-1">{icon}</div>
            <div className="flex items-center ml-4 text-lg font-semi">{text}</div>
        </div>
    )
}