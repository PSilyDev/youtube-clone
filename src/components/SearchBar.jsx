

export const SearchBar = () => {

    return(
        <div>
            <form>
                <div className="flex justify-center">
                    <input 
                        type="text" 
                        placeholder="Search"
                        className="border border-gray-400 w-full h-12 w-5/6 rounded-l-full placeholder-gray-500 text-lg pl-4 pb-1 shadow-inner shadow-gray-200"  
                    />
                    <button className="border border-gray-400 w-20 h-12 rounded-r-full flex  items-center border shadow-inner shadow-gray-200"><svg className="h-6 w-8 ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
                </div>
            </form>
        </div>
    )
}