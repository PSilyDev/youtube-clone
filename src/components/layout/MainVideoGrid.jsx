import { MainVideoCard } from "./MainVideoCard"
import { VIDEOS } from "../../../public/videoData"

export const MainVideoGrid = () => {

    return(
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {VIDEOS.map((item, id) => 
                (
                    <div key={id}>
                        <MainVideoCard 
                            videoImg={item.videoImg}
                            profileImg={item.profileImg} 
                            title={item.title}
                            author={item.author}
                            views={item.views} 
                            timestamp={item.timestamp} 
                        />
                    </div>
                )
                )}
        </div>
    )
}