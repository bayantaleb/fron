import React from 'react';
import axios from 'axios';

import Albums from '../components/Album';



class AlbumList extends React.Component {

state = {
    albums: []
}
    componentDidMount(){
        axios.get('http://localhost:8000/api/')
        .then(res => {
            this.setState({
                albums: res.data
            });
            console.log(res.data);
        })

    }
    render(){
        return(
            <Albums data = {this.state.albums} />
        )
    }
}

export default AlbumList;
