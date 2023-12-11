import { useEffect, useState, useRef } from "react";

export function CountDown({ startFrom, toTime = 0, onDone }) {

    const [counter, setCounter] = useState(startFrom)
    const intervalIdRef = useRef()

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setCounter((prevCount) => prevCount - 1)
        }, 1000)

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [])

    useEffect(() => {
        if (counter <= 0) {
            clearInterval(intervalIdRef.current)
            onDone()
        }
    }, [counter])

    const redDisplay = (counter < 7) ? "red-display" : ""

    return (
        <>
            <h1>Count Down</h1>
            <section className={`count-down ${redDisplay}`}>
                <h1>{counter}</h1>
            </section>
        </>
    )
}

