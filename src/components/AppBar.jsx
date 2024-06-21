import { SearchBar } from "./SearchBar"


export const AppBar = () => {

    return(
        <div className="flex justify-between">
            <div className="bg-red-400">
                Youtube
            </div>
            <div className="bg-green-400">
                <SearchBar />
            </div>
            <div className="bg-blue-400">
                Sign in
            </div>
        </div>
    )
}