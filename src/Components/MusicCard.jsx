import React from 'react'

function MusicCard({songName, artistName, image, isFavorite, handleClick, idx}) {
  return (
    <div className='relative w-full min-h-36 bg-zinc-100 rounded-md px-4 py-4 flex items-center gap-x-2'>
        <div className="w-20 h-20 bg-orange-500 rounded-md overflow-hidden">
            <img src={image} className='w-full h-full object-cover' />
        </div>
        <div className="px-4">
            <h2 className='font-semibold text-xl'>{songName}</h2>
            <p className='font-semibold'>{artistName}</p>
        </div>
        <button className={`${isFavorite ? "bg-green-500" : "bg-orange-500"} px-4 py-2 w-fit text-nowrap rounded-md text-white absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2`} onClick={()=> handleClick(idx)}>{isFavorite ? "Added" : "Add to Favorite"}</button>
    </div>
  )
}

export default MusicCard