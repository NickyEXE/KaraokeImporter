import React from 'react'

const Home = () =>  {
    const logo = require("../assets/nicky_singing.jpg")
  return (
    <center>
        <h1 className="title">Welcome to SING WITH NICKY</h1>
        <img className="homeLogo" src={logo} alt="Nicky Singing"/>
        <marquee><h1 className="title">Where Nicky, the Karaoke Prince, lends his wondrous machine unto you!</h1></marquee>
    </center>
  )
}


export default Home