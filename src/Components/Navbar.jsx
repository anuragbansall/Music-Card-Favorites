import React from 'react'

function Navbar({favCount}) {
  return (
    <div className='sticky top-0 z-10 w-full bg-zinc-200 p-8 sm:px-16 py-4 flex justify-end sm:justify-between items-center'>
        <h3 className='text-2xl font-semibold text-orange-500 hidden sm:block'>Your Favorites</h3>
        <div className="flex px-4 py-2 gap-x-2 bg-orange-500 text-white font-semibold rounded-md text-lg">
            <h3>Favorites</h3>
            <h3>{favCount}</h3>
        </div>
    </div>
  )
}

export default Navbar