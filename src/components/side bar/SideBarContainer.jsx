export const SideBarContainer = ({icon, text, open}) => {
    console.log('open - ', open);
    return(
        <div className= {`flex items-center h-11 rounded-xl hover:bg-gray-200 ${open ? "justify-start mx-3" : "justify-center mt-2"} duration-300`}>
            <div className={`flex items-center rounded-full h-8 w-8`}>{icon}</div>
            {open?
            (<div className="flex items-center ml-4 text-lg font-semi">{text}</div>)
            : (<div></div>)}
        </div>
    )
}