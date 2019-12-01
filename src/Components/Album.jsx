import React from "react";
import { Container, Col, Row } from "reactstrap";




class AlbumDetails extends React.Component {
  state = { 
    id: undefined,
    song: undefined
    
   }
  render() { 

    /* const albumId = props.match.params.albumId;

    const song = items.find(item => item.id.toString() === albumId); */

    
      if (song) {
        return (
          <Container className="my-5">
            <Row>
              <Col md="4">
                <img
                  className="album-detail-image"
                  src={"/" + song.image}
                  alt="selected album"
                ></img>
              </Col>
              <Col md="8">
                <h2>{song.title}</h2>
                {/* <h3>{dish.description}</h3>
                <h4>Label: {dish.label}</h4>
                <h4>Price: {dish.price}</h4> */}
    
               {/*  <ul>
                  {dish.comments.map((comment, k) => (
                    <li key={k}>
                      {comment.rating} | {comment.comment} by {comment.author}
                    </li>
                  ))}
                </ul> */}
              </Col>
            </Row>
          </Container>
        );
      } else {
        return <div>This album is stolen</div>;
      };
  }

  componentDidMount = async () => {

    const {id} = await this.props.match.params;
    let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/{id}", 
    {
        headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9f3fc73abemsh2482bf2a9ace40bp19cd74jsn7a75d8a0bae1"
    },
    method: "GET"
})
console.log(response)
let json = await response.json();

let song = await json.data.album;

console.log(song)

this.setState({
    id: song.id,
    song: song
    
})

}
 

  

 
};

export default AlbumDetails;