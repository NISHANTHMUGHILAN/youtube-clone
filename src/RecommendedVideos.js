import React from 'react'
import './recommendedVideos.css';
import VideoCard from './VideoCard';
function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
        title="Become a Web Developer in 10 minutes"
        views="5.5M Views"
        timestamp="5 months ago"
        channelImage=""
        channel="Sonny Sangha"
        image="https://img.youtube.com/vi/UaB_FtsdlYk/sddefault.jpg"
        />
        <VideoCard
        title="4 Things You Should Know Before Making $$ Millions"
        views="5.5M Views"
        timestamp="1 months ago"
        channelImage=""
        channel="Iman Gadzi"
        image="https://img.youtube.com/vi/r3gYQ4Vf5XU/sddefault.jpg"
         />
         <VideoCard
        title="Shoulder workout with an old friend"
        views="5K Views"
        timestamp="2 months ago"
        channelImage=""
        channel="Jeswin Oliver"
        image="https://img.youtube.com/vi/C6H_MifPmsw/sddefault.jpg"
         />
         <VideoCard
        title="Oppenheimer-Can You Hear the Music"
        views="10M Views"
        timestamp="1 Year ago"
        channelImage=""
        channel="DestroyToThrash"
        image="https://img.youtube.com/vi/vT8ir-GHP_U/sddefault.jpg"
         />
         <VideoCard
        title="Become a Web Developer in 10 minutes"
        views="5.5M Views"
        timestamp="5 months ago"
        channelImage=""
        channel="Sonny Sangha"
        image="https://img.youtube.com/vi/UaB_FtsdlYk/sddefault.jpg"
        />
        <VideoCard
        title="4 Things You Should Know Before Making $$ Millions"
        views="5.5M Views"
        timestamp="1 months ago"
        channelImage=""
        channel="Iman Gadzi"
        image="https://img.youtube.com/vi/r3gYQ4Vf5XU/sddefault.jpg"
         />
          <VideoCard
        title="Shoulder workout with an old friend"
        views="5K Views"
        timestamp="2 months ago"
        channelImage=""
        channel="Jeswin Oliver"
        image="https://img.youtube.com/vi/C6H_MifPmsw/sddefault.jpg"
         />
         <VideoCard
        title="Oppenheimer-Can You Hear the Music"
        views="10M Views"
        timestamp="1 Year ago"
        channelImage=""
        channel="DestroyToThrash"
        image="https://img.youtube.com/vi/vT8ir-GHP_U/sddefault.jpg"
         />

        
      </div>

    </div>
  )
}

export default RecommendedVideos
