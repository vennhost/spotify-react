import React from 'react';
import SongList from './SongsList';
import NavBar from './NavBar';
import '../index.css'
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from '../Components/HomePage';
import Footer from './Footer';
import AlbumDetails from './Album'



class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <NavBar />
                <div>
                    
                    
                     <Route path="/" exact component={HomePage} />  
                     <Route path="/albumdetails/:albumId" component={AlbumDetails} />
                        
                    
                </div>
                <Footer />
            </Router>
         );
    }
}
 
export default MainComponent;