import React from 'react';
import SongList from './SongsList';
import '../index.css'
import {Container, Row, Col} from 'reactstrap'



class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <div>
                    <h1>My Spotify</h1>
                    
                        <SongList />
                        
                    
                </div>
            </Container>
         );
    }
}
 
export default MainComponent;