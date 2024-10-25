import React, { useState } from 'react'


function Home() {

    const [cities, setcities] = useState(["Istanbul", "Ankara", "Izmir", "Antalya", "Bursa", "Adana", "Konya", "Gaziantep", "Mersin", "Diyarbakir"]);


    const hello = () => {
        alert('Hello World')
    }


    const names = ['John', 'Paul', 'George', 'Ringo'];

  return <>
        <h1>Home Page</h1>
        <button onClick={hello}>Click me</button>
        <ul>
            {names.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
        <hr />
        <ul>
            {cities.map((city, index) => <li key={index}>{city}</li>)}
        </ul>
  </>
}

export default Home


//Test cases
//1. Test if the component renders
//2. Test if the component renders the correct text