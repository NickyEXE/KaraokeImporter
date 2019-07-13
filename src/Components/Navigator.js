    
import React from 'react'

const Navigator = (props) =>  {
  return (
    <div className="nav">
      <button onClick={props.goToNewPlaylist}>Create a New Playlist</button>
    </div>
  )
}


export default Navigator