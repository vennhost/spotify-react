import React from 'react';
import {Row, Col, Card, CardText, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap'




class SongList extends React.Component {
    state = { 
        songs: []
     }
    render() { 
        return ( 
            <div>
                <Row>
                {(this.state.songs).map((song, y) => 
                    
                    <Col md="4">
                    <Card className="song m-2" key={y}>
                            <CardImg top src={ song.album.cover } alt="Song Image" />
                            <CardBody>
                            <CardTitle>{ song.title }</CardTitle>
                            
                            <CardText>{ song.id }</CardText>
                            </CardBody>
                        </Card> 
                        </Col>                    
                    )}
                </Row>
            </div>
         );
    }

        componentDidMount = async () => {
            let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", 
            {
                headers: {
                    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                    "X-RapidAPI-Key": "9f3fc73abemsh2482bf2a9ace40bp19cd74jsn7a75d8a0bae1"
            },
            method: "GET"
        })
        console.log(response)
        let json = await response.json();
        
        let songs = await json.data;

        console.log(songs)

        this.setState({
            songs: songs
        })
        
        }
}
 
export default SongList;