import React, { Component } from "react";
import FullVideoView from "../components/VideoView";
import ButtonList from "../components/ButtonList";
import { data } from "../data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: data,
      currentVideo: {}
    };
  }

  pickCurrentVideo = currentVideo => {
    this.setState({
      currentVideo
    });
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="main-container">
        <FullVideoView data={this.state.currentVideo} />
        <div className="button-section">
          {videos.map(video => (
            <ButtonList
              key={video.id}
              data={video}
              onClick={() => this.pickCurrentVideo(video)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
