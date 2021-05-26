import React from 'react';
import '../App.scss';
import './Playlist.scss';

const Playlist = () => {
    return ( 
        <div className="playlist-container" >
            <h3>Favorite Songs</h3>
            <ul>
                <li>Song 1</li>
                <li>Song 2</li>
                <li>Song 3</li>
            </ul>
        </div>
     );
}
 
export default Playlist;
