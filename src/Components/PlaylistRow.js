import React from 'react';

const PlaylistRow = (props) => {
    const divToStrip = document.createElement("div")
    divToStrip.innerHTML = props.description
    const strippedText = divToStrip.innerText
    return(
            <div className="playlist-card" onClick={() => props.goToPlaylist(props.id)}>
                    <strong><p>{props.name}</p></strong>
                    <img src={props.image_url} width="200px" height="200px" alt={props.name + " Album Art"}/><p>
                    {strippedText}</p>
            </div>
)}

export default PlaylistRow