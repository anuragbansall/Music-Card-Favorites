import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import MusicContainer from './Components/MusicContainer'
import PopupBox from './Components/PopupBox'

function App() {
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('musicData');
        return savedData ? JSON.parse(savedData) : [
            { songName: "Mi Amor", artistName: "Sonam Bajwa", image: "https://images.indianexpress.com/2023/05/sonam-bajwa.jpg", isFavorite: false },
            { songName: "Admirin' You", artistName: "Karan Aujla", image: "https://c.saavncdn.com/740/Admirin-You-feat-Preston-Pablo-Punjabi-2023-20230730053753-500x500.jpg", isFavorite: false },
            { songName: "One Love", artistName: "Shubh", image: "https://i1.sndcdn.com/artworks-nGq8biEWiLnc-0-t500x500.jpg", isFavorite: false },
            { songName: "Excuses", artistName: "AP Dhillon", image: "https://c.saavncdn.com/890/Excuses-English-2021-20210930112054-500x500.jpg", isFavorite: false },
            { songName: "With You", artistName: "Ap Dhillon", image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/08/ap-dhillon-with-you-1693454071.jpg", isFavorite: false },
            { songName: "Aam Jahe Munde", artistName: "Parmish Verma", image: "https://images.genius.com/02888297f4e73c5b3577d8d41755ed61.999x999x1.jpg", isFavorite: false },
            { songName: "Fe!n", artistName: "Travis Scott", image: "https://i.ytimg.com/vi/wYeFAlVC8qU/maxresdefault.jpg", isFavorite: false },
        ];
    });

    const [favCount, setFavCount] = useState(0);
    const [popupBox, setPopupBox] = useState({
        isPopup: false,
        popupMessage: "",
        popupColor: ""
    });

    useEffect(() => {
        setFavCount(() => (
            data.filter(item => item.isFavorite).length
        ));
    }, [data]);

    useEffect(() => {
        localStorage.setItem('musicData', JSON.stringify(data));
    }, [data]);

    const handleClick = (idx) => {
        const isCurrentlyFavorite = data[idx].isFavorite;
        setData(prevData => (
            prevData.map((item, index) => (
                idx === index ? ({ ...item, isFavorite: !item.isFavorite }) : ({ ...item })
            ))
        ));

        setPopupBox({
            isPopup: true,
            popupMessage: isCurrentlyFavorite ? "Song removed from favorites" : "Song added to favorites",
            popupColor: isCurrentlyFavorite ? "bg-red-500" : "bg-green-500"
        });

        setTimeout(() => {
            setPopupBox(prevData => ({
                ...prevData,
                isPopup: false
            }));
        }, 1000);
    };

    return (
        <div className='min-h-screen w-full bg-zinc-300'>
            <PopupBox 
                isPopup={popupBox.isPopup}
                popupColor={popupBox.popupColor}
                popupMessage={popupBox.popupMessage}
            />
            <Navbar favCount={favCount} />
            <MusicContainer 
                songData={data}
                handleClick={handleClick}
            />
        </div>
    );
}

export default App;