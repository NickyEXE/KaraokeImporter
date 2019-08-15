    
import React from 'react'

const Navigator = (props) =>  {
  return (
    <center className="nav">
      <div className="nav-button" onClick={props.goToNewPlaylist}>Create a New Playlist</div>
      <div className="nav-button" onClick={props.goToPlaylists}>Go To Existing Playlists</div>
    </center>
  )
}


export default Navigator