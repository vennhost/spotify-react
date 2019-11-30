import React from 'react';
import SongList from './SongsList';
import NavBar from './NavBar';
import '../index.css'
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from '../Components/HomePage'



class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <NavBar />
                <div>
                    
                    
                     <Route path="/" exact component={HomePage} />   
                        
                    
                </div>
            </Router>
         );
    }
}
 
export default MainComponent;