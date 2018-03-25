import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './models.json';

class App extends Component {

    constructor(props) {
    super(props);

    this.state = { search_result: []};
  }

  componentDidMount()
  {
    fetch('/api/cars')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ 
        search_result: responseJson
      });
    })
     console.log("Fetching data");
  }

  Search()
  {
    fetch('/api/cars')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ 
        search_result: responseJson
      });
    })
     console.log("Fetching data");
    
  }

  Populate()
  {
    fetch('/api/populate')
     console.log("Populated");
    
  }

  render() {

        if(data){
          return ( 
 
            <div>
                <button type="button" class="update_button" onClick={()=>{this.Search()}}>Search</button>
                <button type="button" class="update_button" onClick={()=>{this.Populate()}}>Populate</button>

                <ul>
                {
                   data.map(function(elem){
                      return( 

                      <div class="border">
                      <h2>{elem.brand}</h2> 
                      <h3>Name : {elem.name}</h3> 
                      <h3>Volume : {elem.volume[0]}, {elem.volume[1]}</h3> 

                      </div> ) ;

                    })
                }
                </ul>

            </div>
        );
    }

    else{
      return (
        <div>
        <button type="button" class="update_button" onClick={()=>{this.Search()}}>Search</button>
          <img src={logo} alt="loading" /> 
        </div>
        );
    }

  }
}

export default App;
