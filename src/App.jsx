import { useState } from 'react'
import { AnimalList } from './cmps/AnimalList'
import { SeasonClock } from './cmps/SeasonClock'
import { CountDown } from './cmps/CountDown'
import { WatcherApp } from './cmps/WatcherApp'
import { MouseMonitor } from './cmps/MouseMonitor'
import { NavLink, Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'

export function App() {
    const [page, setPage] = useState("clock")

    const animalInfos = [
        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fin Whale', count: 28 }
    ]

    function getImgUrl(url) {
        return new URL(url, import.meta.url).href
    }
    function onDoneActivities() {
        console.log('Done!!!!!!')
        const audio = new Audio(getImgUrl("./assets/mp3/win31-tada.mp3"))
        // audio.play()
    }
    return (
        <Router>

            <section className='main-app'>
                <header className='container'>
                    <NavLink className="nice-link" to="watchers">Watchers App</NavLink>
                    <NavLink className="nice-link" to="animals">Animals Info</NavLink>
                    <NavLink className="nice-link" to="mouse">Mouse Position</NavLink>
                    <NavLink className="nice-link" to="clock">Season Clock</NavLink>
                    <NavLink className="nice-link" to="count">Count Down</NavLink>

                </header>

                <main className='container'>
                    <section>
                        <Routes>
                            <Route path='/watchers' element={<WatcherApp />} />
                            <Route path='/animals' element={<AnimalList animalInfos={animalInfos} />} />
                            <Route path='/clock' element={<SeasonClock />} />
                            <Route path='/count' element={<CountDown startFrom={10} onDone={onDoneActivities} />} />
                            <Route path='/mouse' element={<MouseMonitor />} />
                            <Route index element={<Navigate to='/clock' />} />
                        </Routes>
                    </section>
                </main>
            </section>
        </Router>

    )
}
