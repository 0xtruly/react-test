import React, {Component} from 'react';
import Header from './components/Header';
import FaceList from './components/face-list';
import './App.css'



class App extends Component{ 
  render(){
    return(
        <div className="App">
         <header className="App-header">        
            <Header />
          </header>
          <FaceList />
        </div>    
    );
  }
}


export default App;
