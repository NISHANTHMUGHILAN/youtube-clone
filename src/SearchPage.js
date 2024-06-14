import React from 'react';
import './SearchPage.css';
import VideoRow from './VideoRow';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
    <hr></hr>
    <ChannelRow
        image="https://img.youtube.com/vi/U_LlX4t0A9I/sddefault.jpg"
        channel="MrBeast"
        verified
        subs="280M"
        noOfVideos={802}
        description="SUBSCRIBE FOR A COOKIE"
    />
    <hr></hr>
    <VideoRow 
    views="100M"
    subs="280M"
    description="SUBSCRIBE FOR A COOKIE"
    timestamp="12 hours ago"
    channel="MrBeast"
    title="$10,000 Every Day You Survive In The Wilderness"
    image="https://img.youtube.com/vi/U_LlX4t0A9I/sddefault.jpg"
    />
    <VideoRow 
    views="106M"
    subs="280M"
    description="SUBSCRIBE FOR A COOKIE"
    timestamp="12 days ago"
    channel="MrBeast"
    title="Protect The Yacht Keep It!"
    image="https://img.youtube.com/vi/F6PqxbvOCUI/sddefault.jpg"/>
    
    
    <VideoRow 
    views="103M"
    subs="280M"
    description="SUBSCRIBE FOR A COOKIE"
    timestamp="1 month ago"
    channel="MrBeast"
    title="In 10 minutes this room will explode"
    image="https://img.youtube.com/vi/Pv0iVoSZzN8/sddefault.jpg"/>

<VideoRow 
    views="103M"
    subs="280M"
    description="SUBSCRIBE FOR A COOKIE"
    timestamp="1 month ago"
    channel="MrBeast"
    title="Protect the lamborghini Keep It!"
    image="https://img.youtube.com/vi/mKdjycj-7eE/sddefault.jpg"/>


    </div>
    
  )
}

export default SearchPage;
