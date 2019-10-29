import React from 'react'

const QueueSendFooter = (props) =>  {

    return(
        <div className="footwrapper">
            <div className="foot">You have selected {props.numSongs} song{props.numSongs > 1 && "s"}.
                <div className="span-button" onClick={props.sendToQueue}>
                    Send to Queue!
                </div>
            </div>
        </div>
    )
}

export default QueueSendFooter