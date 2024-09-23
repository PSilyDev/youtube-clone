export function MainVideoCard({videoImg, profileImg, title, author, views, timestamp}) {
    
    const ellipsisClicked = () => {
        console.log('clicked');
    }

    return(
        <div className="m-3">
            <img src={videoImg} className="rounded-xl"></img>
            
            <div className="grid grid-cols-12">
                <div className="col-span-2 size-14 pr-2 py-3">
                    <img src={profileImg} className="rounded-full"></img>
                </div>
                <div className="flex flex-row col-span-10 py-2 w-full">
                    <div className="w-11/12">
                        <div className="text-lg font-semibold">
                            {title}
                        </div>
                        <div className="text-sm text-gray-500">
                            {author}
                        </div>
                        <div className="text-sm text-gray-500">
                            {views} views | {timestamp} ago
                        </div>
                    </div>
                    <div className="flex-grow mt-1 cursor-pointer" onClick={ellipsisClicked}>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}