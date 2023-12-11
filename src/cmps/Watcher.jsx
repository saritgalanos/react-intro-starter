import { useEffect, useState } from "react";
import { WatcherInfoModal } from "./WatcherInfoModal";

export function Watcher({ watcher, onRemove, onSelectWatcher }) {

    function getImgUrl(url) {
        return new URL(url, import.meta.url).href
    }



    return (
        <section className="wathcer">
            <img className='profile-img' src={getImgUrl('../assets/img/profile1.jpg')} />
            <h5>{watcher.fullname}</h5>
            <hr></hr>
            <button onClick={() => { onRemove(watcher.id) }}>X</button>
            <button onClick={onSelectWatcher}>Select</button>
            
        </section>
    )
}


