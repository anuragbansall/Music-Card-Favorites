import React from 'react'
import MusicCard from './MusicCard'

function MusicContainer({songData, handleClick}) {

  return (
    <div className='px-8 py-8 pb-12 grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-x-4 gap-y-8 place-items-center'>
        {songData.map((item, idx) => (
            <MusicCard 
                songName = {item.songName}
                artistName = {item.artistName}
                image = {item.image}
                isFavorite = {item.isFavorite}
                handleClick = {handleClick}
                key = {idx}
                idx = {idx}
            />
        ))}
    </div>
  )
}

export default MusicContainer