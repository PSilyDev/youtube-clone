export function VideoCard({videoImg, profileImg, title, author, views, timestamp}) {
    return(
        <div className="m-3">
            <img src={videoImg} className="rounded-xl"></img>
            
            <div className="grid grid-cols-12">
                <div className="col-span-2 size-14 pr-2 py-3">
                    <img src={profileImg} className="rounded-full"></img>
                </div>
                <div className="col-span-10 py-2">
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
            </div>
        </div>
    )
}