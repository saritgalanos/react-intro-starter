import { utilService } from "../services/util.service.js"
import { useEffect, useState } from "react";


export function SeasonClock() {
    const [isDark, setIsDark] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date())

    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)
        
        return () => {
            clearInterval(intervalId);
        }
    }, []);


    function getImgUrl(url) {
        return new URL(url, import.meta.url).href
    }

    const darkModeClass = isDark ? 'dark' : ''
    const monthName = utilService.getMonthName(currentDate)
    const seasonName = utilService.getSeasonName(currentDate)
    const dayName = utilService.getDayName(currentDate)
    return (
        <>
            <h1>Season Clock</h1>
            <section className={`season-clock ${darkModeClass}`} onClick={() => { setIsDark(!isDark) }}>
                <h2>{monthName} ({seasonName}) </h2>
                <img className='season-img' src={getImgUrl(`../assets/img/${utilService.getSeasonName((currentDate))}.png`)} />
                <h3>{dayName} {currentDate.getHours()}:{currentDate.getMinutes()}:{currentDate.getSeconds()} </h3>

            </section >
        </>
    )
}


