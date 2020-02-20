import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Navigator extends Component {

  state={
    expanded: false,
    redirect: null
  }

  onExpand = () => this.setState(prevState => ({expanded: !prevState.expanded}))

  expanded = () => "nav-button" + (this.state.expanded ? " verticalized" : "")

  clickRoute = (redirect) => {
    this.setState({expanded: false, redirect: redirect})
  }


  render(){
    const queueButton = require("../assets/play.svg")
    return (
      // add clicked
      <center className={this.state.expanded ? "nav selected" : "nav"}>

        <div id="queue-icon" onClick={() => this.setState({redirect: "/queue"})} className={this.props.songCount > 0 ? "queued" : ""}>
          <img id="queue-icon-pic" src={queueButton}/>
          <div id ="queue-icon-songs">{this.props.songCount}</div>
        </div>
        <div className={this.expanded()} onClick={() => this.clickRoute("/playlists/")}>View Playlists</div>
        <div className={this.expanded()} onClick={() => this.clickRoute("/playlists/new/")}>Create a New Playlist</div>
        <div className={this.expanded()} onClick={() => this.clickRoute("/songs/")}>View All Songs</div>
        <div className="dropdown" onClick={this.onExpand}><img id="dropdown-icon" className={this.state.expanded ? "dropdown-icon clicked" : ""} src={require("../assets/dropdown.png")} alt="Nicky Singing"/></div>
        {this.state.redirect && <Redirect to={this.state.redirect}/>}
      </center>
    )
  }
}


export default Navigator