import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props){
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.scr = album.songs[0].audioSrc;

  }

  render () {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={ this.state.album.albumCover } alt={ this.state.album.title } />
          <div className="album-details">
            <h1 id="album-title">{ this.state.album.title }</h1>
            <h2 className="artist">{ this.state.album.artist }</h2>
            <div id="release-info">{ this.state.album.releaseInfo }</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
          {
            this.state.album.songs.map((song, parseInt) =>
            <Link to={`/album/${song.slug}`} key={parseInt}>
              <tr key={song.number}>{parseInt +1}</tr>
              <tr key={song.name}>{song.title}</tr>
              <tr key={song.length}>{song.duration}</tr>
            </Link>
            )
          }
          </tbody>
        </table>
      </section>
    );
  }
}

export default Album;
