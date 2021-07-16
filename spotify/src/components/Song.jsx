import React, { Component } from "react";

export default class Song extends Component {
  render() {
    return (
      <div className="col text-center text-white mb-3">
        <img className="img-fluid" src={this.props.img} alt="img placeholder" />
        <div className="p-1">
          <p
            className="main-home-album-title"
            onClick={() =>
              this.props.history.push("/album/" + this.props.albumId)
            }
          >
            {this.props.albumTitle}
          </p>

          <p
            className="main-home-artist-name"
            onClick={() =>
              this.props.history.push("/artist/" + this.props.artistId)
            }
          >
            {" "}
            {this.props.artistName}
          </p>
        </div>
      </div>
    );
  }
}
