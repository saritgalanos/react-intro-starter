import { useEffect, useState } from "react";
import { Watcher } from './Watcher'
import { watcherService } from '../services/watcher.service'
import { WatcherInfoModal } from "./WatcherInfoModal";

export function WatcherApp() {

    const [watchers, setWatchers] = useState([]);
    const [selectedWatcher, setSelectedWatcher] = useState(null)

    useEffect(() => {
        loadWatchers();
    }, []);

    async function loadWatchers() {
        try {
            const watchersFromDB = await watcherService.getAllWatchers()
            setWatchers(watchersFromDB)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async function onAddWatcher() {
        const newWatcher = prompt('New Profile Name?', 'Bob')
        try {
            await watcherService.addWatcher(newWatcher)
            loadWatchers()
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async function onRemoveWatcher(id) {
        try {
            await watcherService.removeWatcher(id)
            setWatchers(prevWatchers => {
                return prevWatchers.filter(watcher => watcher.id !== id)
            })
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    return (
        <section className="wathcer-app">
            <div className="app-title">Whatcher App </div>
            <button className="nice-button" onClick={onAddWatcher} > Add Watcher </button>
            <section className="watechers-display">
                {watchers.map((watcher) =>
                    <Watcher key={watcher.id} watcher={watcher} onSelectWatcher={() => setSelectedWatcher(watcher)} onRemove={onRemoveWatcher} />
                )}
            </section>
            {selectedWatcher && <WatcherInfoModal watcher={selectedWatcher} onClose={() => setSelectedWatcher(null)} />}
        </section>
    )
}