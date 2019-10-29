import React from 'react';
import uuid from "uuid";
import SongTable from './SongTable.js'

const Queue = (props) => {
    return(
        <div>
        <h3><center>These are queued up and ready to sing!</center></h3>
        <SongTable 
            songs={props.songs} 
            goToSongEdit={props.goToSongEdit} 
            sendToQueue={props.sendToQueue}
        />
        </div>
    )
}

export default Queue