import React from 'react';

const PlaylistRow = (props) => {
    // In case Spotify Playlists have links for some reason.
    const divToStrip = document.createElement("div")
    divToStrip.innerHTML = props.description
    const strippedText = divToStrip.innerText
    return(
            <div className="playlist-card" onClick={() => props.goToPlaylist(props.id)}>
                    <strong>{props.name}</strong><br/>
                    <img src={props.image_url} width="200px" height="200px" alt={props.name + " Album Art"}/><br/>
                    {strippedText}<br/>
            </div>
)}

export default PlaylistRow