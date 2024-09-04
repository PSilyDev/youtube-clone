export const SideBarContainer = ({icon, text, open}) => {
    return(
        <div className= {`relative flex items-center ${open ? "justify-start h-12 mt-1 ml-3" : "flex-col justify-center h-20 w-20"} group`}>
            {/* icon */}
            <div className={`flex items-center rounded-full h-8 w-8 p-1`}>{icon}</div>
            {/* text */}
            <div className={`flex items-center text-lg font-semi ${open ? " ml-4":"text-xs mt-1"}`}>{text}</div>
            {/* tooltip */}
            <div className={`absolute left-full bg-white text-black text-xs p-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${open ? "ml-5" : "ml-3"}`}>
                {text}
            </div>
           
        </div>
    )
}
