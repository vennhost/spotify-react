import React from 'react'
import SongList from './SongsList';
import {Row, Col, Container} from 'reactstrap';
import SideBar from './SideBar';
import {Logo} from './logo.png'

class HomePage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Row>

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