import React from 'react';
import SongList from './SongsList'



class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>My Spotify</h1>
                <SongList />
            </div>
         );
    }
}
 
export default MainComponent;