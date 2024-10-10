import React, { useEffect, useState } from 'react'

const TopBar = () => {
    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (
        <div className="container topBar">
            <div className="p-3 d-flex justify-content-between align-items-center">
                <div style={{ width: "150px" }} className='timeZoneDate'>{timezone}</div>
                <div className="marquee-text">
                    <div className="top-info-bar">
                        <div className="fl-1 info-text">
                            <a href="#;">latest news of IT.</a>
                        </div>
                        <div className="fl-1 info-text">
                            <a href="#;">Python Developer job available. Click to apply </a>
                        </div>
                        <div className="fl-1 info-text">
                            <a href="#;">Proxy war has started. Iran Israel Conflicts.</a>
                        </div>
                        <div className="fl-1 info-text">
                            <a href="#;">Proxy war has started. Iran Israel Conflicts.</a>
                        </div>
                    </div>
                </div>
                <div className="w-25 timeZoneDate dateTime text-end">{dateTime.toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                })}</div>
            </div>
        </div>
    )
}

export default TopBar