import React from 'react'

const Home = (props) =>  {
  const logo = require("../assets/nicky_singing.jpg")

  const renderLogin = () => {
    if (props.token){
      return(<div className="edit-button">You are logged in with Spotify!</div>)
    }
    else{
      return(
        <a href={`https://accounts.spotify.com/authorize?client_id=a752161e6a4047ee996898f99cdb045f&response_type=token&redirect_uri=http://localhost:3001/&scope=playlist-read-private`}>
          <div className="edit-button">Login with Spotify!</div>
        </a>
        )
    }
  }
  return (
    <center>
        <h1 className="title">Welcome to SING WITH NICKY</h1>
        {renderLogin()}
        <img className="homeLogo" src={logo} alt="Nicky Singing"/>
        <marquee><h1 className="title">Where Nicky, the Karaoke Prince, lends his wondrous machine unto you!</h1></marquee>
    </center>
  )
}


export default Home