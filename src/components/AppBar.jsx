import { SearchBar } from "./SearchBar"


export const AppBar = () => {

    return(
        <div className="flex justify-between">
            <div className="bg-red-400 w-2/12">
                Youtube
            </div>
            <div className="bg-green-400 w-6/12">
                <SearchBar />
            </div>
            <div className="bg-blue-400 w-3/12">
                Sign in
            </div>
        </div>
    )
}