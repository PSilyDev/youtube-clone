export const SideBarContainer = ({icon, text, open}) => {
    return(
        <div className= {`relative flex items-center h-11 rounded-xl hover:bg-gray-200 mx-3 mt-2 ${open ? "justify-start" : "justify-center"} group`}>
            <div className={`flex items-center rounded-full h-8 w-8 p-1`}>{icon}</div>
            {open?
            (<div className="flex items-center ml-4 text-lg font-semi">{text}</div>)
            : (<div></div>)}
            {!open && (
                <div className="absolute left-full ml-3 bg-white text-black text-xs p-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {text}
                </div>
            )}
        </div>
    )
}