import React, {Component} from 'react'
class Navigator extends Component {

  state={
    expanded: false
  }

  onExpand = () => this.setState(prevState => ({expanded: !prevState.expanded}))

  expanded = () => "nav-button" + (this.state.expanded ? " verticalized" : "")

  clickRoute = (func) => {
    this.setState({expanded: false})
    func()
  }


  render(){
    const queueButton = require("../assets/play.svg")
    // const queued = this.state.songCount >
    return (
      // add clicked
      <center className={this.state.expanded ? "nav selected" : "nav"}>

        <div id="queue-icon" onClick={this.props.goToQueue} className={this.props.songCount > 0 ? "queued" : ""}>
          <img id="queue-icon-pic" src={queueButton}/>
          <div id ="queue-icon-songs">{this.props.songCount}</div>
        </div>
        <div className={this.expanded()} onClick={() => this.clickRoute(this.props.goToPlaylists)}>View Playlists</div>
        <div className={this.expanded()} onClick={() => this.clickRoute(this.props.goToNewPlaylist)}>Create a New Playlist</div>
        <div className={this.expanded()} onClick={() => this.clickRoute(this.props.viewAllSongs)}>View All Songs</div>
        <div className="dropdown" onClick={this.onExpand}><img id="dropdown-icon" className={this.state.expanded ? "dropdown-icon clicked" : ""} src={require("../assets/dropdown.png")} alt="Nicky Singing"/></div>
      </center>
    )
  }
}


export default Navigator