/*manages saving and reading the user’s preferences*/
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'


export const watcherService = {
    addWatcher,
    removeWatcher,
    getAllWatchers
    // getWatcherById
}


const watcher = {
    id: 'w101',
    fullname: 'Puki Ba',
    movies: ['Rambo', 'Rocky', 'Mission Impossible']
}

const STORAGE_KEY = 'watchersDB'

//demo data
_createWatchers()

function getAllWatchers() {
    return storageService.query(STORAGE_KEY)
}

async function addWatcher(fullname) {
    const watcher = _createWatcher(fullname)
    const addedWatcher = await storageService.post(STORAGE_KEY, watcher)
    return addedWatcher;
}


function removeWatcher(watcherId) {
    return storageService.remove(STORAGE_KEY, watcherId)
}


function _createWatcher(fullname) {
    return {
        id: utilService.makeId(),
        fullname,
        movies: ['Rambo', 'Rocky', 'Mission Impossible']
    }
}

function _createWatchers() {
    console.log('in create watehcers')
    let watchers = utilService.loadFromStorage(STORAGE_KEY)
    // Nothing in storage - generate demo data
    if (!watchers || !watchers.length) {
        watchers = []
        watchers.push(_createWatcher('Sarit'))
        watchers.push(_createWatcher('Tsachi'))
    }
    utilService.saveToStorage(STORAGE_KEY, watchers)
}
