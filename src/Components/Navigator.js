import React, {Component} from 'react'
class Navigator extends Component {

  state={
    expanded: false
  }

  onClick = () => this.setState(prevState => ({expanded: !prevState.expanded}))

  expanded = () => "nav-button" + (this.state.expanded ? " verticalized" : "")

  render(){
    return (
      // add clicked
      <center className={this.state.expanded ? "nav selected" : "nav"}>
        <div className={this.expanded()} onClick={this.props.goToPlaylists}>View Playlists</div>
        <div className={this.expanded()} onClick={this.props.goToNewPlaylist}>Create a New Playlist</div>
        <div className="dropdown" onClick={this.onClick}><img id="dropdown-icon" className={this.state.expanded ? "dropdown-icon clicked" : ""} src={require("../assets/dropdown.png")} alt="Nicky Singing"/></div>
      </center>
    )
  }
}


export default Navigator