import React, { useState } from 'react'
import Child from './Child'
import Child2 from './Child2'

function Parent() {

    const [counter, setcounter] = useState(0)

    console.log("Parent component rendered!")

    return <>
        <div>Parent</div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
        <hr />
        <Child />
        <Child2 />
    </>
}

export default Parent