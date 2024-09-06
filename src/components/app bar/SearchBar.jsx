

export const SearchBar = () => {

    return(
        <div>
            <form>
                <div className="flex justify-between">
                    <div className="flex w-full">
                    <input 
                        type="text" 
                        placeholder="Search"
                        className="border border-gray-400 w-full h-11 w-10/12 ml-6 rounded-l-full placeholder-gray-500 text-lg pl-5 shadow-inner shadow-gray-200"  
                    />
                    <button className="bg-gray-100 border border-gray-400 w-20 h-11 rounded-r-full flex items-center border"><svg className="h-5 w-7 ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
                    </div>
                    <div className="flex items-center">
                    <svg className="w-10 h-10 ml-5 bg-gray-100 p-3 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000000" d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z"/></svg>
                    </div>
                </div>
            </form>
        </div>
    )
}