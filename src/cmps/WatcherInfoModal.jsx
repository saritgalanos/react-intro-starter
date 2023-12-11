import { useEffect, useState } from "react";
import { utilService } from '../services/util.service'


export function WatcherInfoModal({ watcher, onClose }) {
   

    return (
        <div className="watcher-info-modal">
            <div className="watcher-info-content">
                <div className="app-title" >{watcher.fullname}</div>
                <ul>
                    {watcher.movies.map((movie) => (<li key={movie}> {movie} </li>))}
                </ul>
                <button className="nice-button" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

