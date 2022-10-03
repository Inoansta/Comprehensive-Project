import React, { Component } from "react";
import {useEffect, useState} from "react";

// class Index extends Component {
//     constructor(props) {
//      super(props);
//      this.state = {
//      data: null
//      };
//     }
//     render() {
//      let listItems;
//      if (this.state.data) {
//      listItems = this.state.data.map((item, i) => {
//      return <p key={i}>{item.id}</p>;
//      });
//      } else {
//      return <p>Loading...</p>;
//      }
//      return <>{ listItems }</>;
//     }
//     componentDidMount() {
//      fetch('https://api.github.com/users')
//      .then((res) => res.json())
//      .then((json) => { this.setState({ data: json }); });
//     }
//     }

function Index (){
    var[data, setData] = useState();
    useEffect( () => {fetch('https://api.github.com/users')
        .then((res) => res.json())
        .then(data => setData(data))}, [])
        if(!data){
            return (<p>Loading...</p>)
        }
        else{
            return(
                data.map((item, i)=>{
                    return (<p key={i}>{item.id}</p>)
                })
            )
        }
}

export default Index;