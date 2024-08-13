import React from 'react'

function PopupBox({isPopup, popupColor, popupMessage}) {
  return (
    <div className={`fixed ${isPopup ? "top-4" : "top-[-100%]"} z-50 left-1/2 -translate-x-1/2 ${popupColor} text-white px-4 py-2 rounded font-semibold transition-all duration-500`}>
        {popupMessage}
    </div>
  )
}

export default PopupBox