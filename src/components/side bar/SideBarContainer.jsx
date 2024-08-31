export const SideBarContainer = ({icon, text, open}) => {
    console.log('open - ', open);
    return(
        <div className= {`flex items-center h-11 rounded-xl hover:bg-gray-200 ${open ? "justify-start mx-3 mt-2" : "justify-center mx-3 mt-2"}`}>
            <div className={`flex items-center rounded-full h-8 w-8 p-1`}>{icon}</div>
            <span className="absolute hidden group-hover:inline-block bg-neutral-900 text-white text-xs p-2 whitespace-nowrap rounded top-1/2 -translate-y-1/2 left-[calc(100%+5px)]"></span>
            {open?
            (<div className="flex items-center ml-4 text-lg font-semi">{text}</div>)
            : (<div></div>)}
        </div>
    )
}