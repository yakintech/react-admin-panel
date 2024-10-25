import React, { useMemo } from 'react'

function Child2() {




    const getDate = () => {
        console.log("getDate function called!")
        return new Date().toUTCString()
    }

    let date2 = getDate()
    let date = useMemo(() => getDate(), [])


    return (<>
        <div>Child2</div>
        <h1>Date:{date}</h1>
        <h1>Date2: {date2}</h1>
    </>
    )
}

export default Child2