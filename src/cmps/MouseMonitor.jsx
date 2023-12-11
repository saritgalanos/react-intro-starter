import { useEffect, useState, useRef } from "react";


export function MouseMonitor() {

    const [isRunning, setIsRunning] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 })

    const updatePosRef = useRef()
    useEffect(() => {
        updatePosRef.current = updatePos
        document.removeEventListener('mousemove', updatePosRef.current)
        return () => {
            document.removeEventListener('mousemove', updatePosRef.current)
        }

    }, [])

    function onToggle() {
        const toggleListener = isRunning ? document.removeEventListener : document.addEventListener
        toggleListener('mousemove', updatePosRef.current)
        setIsRunning(isRunning => !isRunning)
    }


    function updatePos(ev) {
        setPos({ x: ev.clientX, y: ev.clientY })
    }

    return (
        <div className="mouse-monitor">
            <h1>Mouse Position</h1>
            {<h1>x:{pos.x}  , y:{pos.y} </h1>}
            <button className="nice-button" onClick={onToggle} >
                {isRunning ? 'Pause' : 'Resume'}
            </button>

        </div>
    )
}

