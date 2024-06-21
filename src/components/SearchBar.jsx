

export const SearchBar = () => {

    return(
        <div>
            <form>
                <div>
                    <input 
                        type="text" 
                        placeholder="Search"
                        className="border border-gray-400 w-full h-12 rounded-full placeholder-gray-500 text-lg pl-4 pb-1 shadow-inner shadow-gray-200"  
                    />
                </div>
            </form>
        </div>
    )
}