import React, { Component } from "react";

import axios from "axios";

export default class Albumi extends Component {
  constructor(props) {
    super(props);
    this.state = {
    albums:[],
    };
    this.loadAlbums = this.loadAlbums.bind(this);
  }

  componentWillMount() {
    this.loadAlbums();
  }

  async loadAlbums()
  {
    const promise = await axios.get("http://localhost:8000/music/");
    const status = promise.status;
    if(status!=200)
    {
      const data = promise.data.data;
      this.setState({albums:data});
    }
  }

  render() {
    return(
      <div>
        <h1>List Of Albums</h1>
		<h4> Artist: reem  -  Album: fire  -  Song: you will</h4>
		<h4> Artist: queen  -  Album: amazing  -  Song: cover</h4>
		<h4> Artist: emi  -  Album: life  -  Song: ommi</h4>
		<h4> Artist: thamer  -  Album: work  -  Song: job</h4>
		<h4> Artist: weliam  -  Album: sun  -  Song: night</h4>
		<h4> Artist: tamara  -  Album: loop  -  Song: circle</h4>
		<h4> Artist: shada  -  Album: natural  -  Song: tree</h4>
		<h4> Artist: nosi  -  Album: mobility  -  Song: coming</h4>
		<h4> Artist: kali  -  Album: sorry  -  Song: jack</h4>
            {this.state.albums.map((value,index)=>{return <h4 key={index}>{value}</h4>})}
      </div>
    )
  }
}