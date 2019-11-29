import React from 'react';



class SongList extends React.Component {
    state = { 
        songs: []
     }
    render() { 
        return ( 
            <div>
                {(this.state.songs).map((song, index) => 
                    <div key={index}>{song.title}</div>
                    )}
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
        let json = response.json();
        
        let songs = await json.data;

        console.log(songs)

        this.setState({
            songs: songs
        })
        
        }
}
 
export default SongList;