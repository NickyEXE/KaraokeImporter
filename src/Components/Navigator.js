    
import React from 'react'

const Navigator = (props) =>  {
  return (
    <div className="nav">
      <button onClick={props.goToNewPlaylist}>Create a New Playlist</button>
      <button onClick={props.goToPlaylists}>Go To Existing Playlists</button>
    </div>
  )
}


export default Navigator