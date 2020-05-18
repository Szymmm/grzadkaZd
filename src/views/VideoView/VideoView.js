import React from 'react';
import YouTube from 'react-youtube';
import styles from "./Video.module.scss";

class Video extends React.Component {
    render() {
      const opts = {
        height: '200',
        width: '353',
        playerVars: {
          autoplay: 0,
        },
      };
   
      return <ul className={styles.wrapper}>
            <div>
                <h3>Witam w Kociewskim Przysiółku</h3>
                <YouTube videoId="PE3hFUaB-Fk" opts={opts} onReady={this._onReady} />
            </div>
        </ul>
      ;
    }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }

  export default Video;