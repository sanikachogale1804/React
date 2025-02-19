import React, { useEffect, useState } from 'react'

function useInternet() {
    // onLine and offLine is event in js
    const [online, setOnline] = useState(navigator.onLine)
    const setOnlineStatus = () => {
        setOnline(true);
    }
    const setOfflineStatus = () => {
        setOnline(false);
    }

    useEffect(() => {

        window.addEventListener("online",setOnlineStatus)
        window.addEventListener("offline",setOfflineStatus)

        // cleanup function
        return ()=>{
            window.removeEventListener ("online",setOnlineStatus)
            window.removeEventListener ("offline",setOfflineStatus)
        }

    }, [online])

    return online
}

export default useInternet
