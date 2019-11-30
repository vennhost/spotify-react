import React from 'react'
import SongList from './SongsList';
import {Row, Col, Container} from 'reactstrap';
import SideBar from './SideBar';
import {Logo} from './logo.png'
import '../index.css'

class HomePage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Row className="home-wrapper">

            <Col md="2">
                <SideBar />
            
            </Col>

            <Col md="10">

                <SongList />

            </Col>

            </Row>

            </>
         );
    }
}
 
export default HomePage;