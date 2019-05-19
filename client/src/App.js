import React, {Component} from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Ads from './components/Ads';
import Grid from './components/GridContainer'

axios.defaults.baseURL = 'http://localhost:3000/api'
const adsURL = `http://localhost:3000/ads/?r=${+ Math.floor(Math.random()*1000)}`;

class App extends Component{
  state ={
    ready: 'initial',
    faces: [],
    
  };

  componentDidMount(){
    this.setState({
      ready: 'loading',
    });
    axios.get('/products?_page=1&_limit=20')
    .then(res=>res.data).then(data =>{
      console.log(data);
      this.setState({
        ready: 'loaded',
        faces: data,
        
      })
    });
  }
  render(){
    const {ready, faces} = this.state;
    console.log(this.state)
    return(
        <div className="App">
          <header className="App-header">        
            <Header />
            {/* <Ads /> */}
          </header>
          <img src={adsURL} alt="ads" />
          
          <Grid>
         
          </Grid>
        </div>    
    );
  }
}


export default App;
