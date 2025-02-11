import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';

 import React, { Component } from 'react';
 
 export default class App extends Component {
  //  apikey= process.env.API_KEY

  state={
    progress:100,
  }


  setprogress=(prog)=>{
    this.setState({
      progress:prog
    })
  }
   render() {
    // console.log(this.apikey)
     return (

      <div style={{fontFamily:'Times New Roman',
        backgroundColor:"#f9f9f9"
      }}>
        <Router>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height={3}
        />
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<News category="general" key="general" progress={this.setprogress} api={this.apikey}/>}/>
            <Route exact path='/business' element={<News category="business" key="business" progress={this.setprogress} api={this.apikey}/>}/>
            <Route exact path='/entertainment' element={<News category="entertainment" key="entertainment" progress={this.setprogress} api={this.apikey}/>}/>
            <Route exact path='/health' element={<News category="health" key="health" progress={this.setprogress} api={this.apikey}/>}/>
            <Route exact path='/science' element={<News category="science" key="science" progress={this.setprogress} api={this.apikey}/>}/>
            <Route exact path='/sports' element={<News category="sports" key="sports" progress={this.setprogress} api={this.apikey}/>}/>
            <Route exact path='/technology' element={<News category="technology" key="technology" progress={this.setprogress} api={this.apikey}/>}/>
  
          </Routes>
        </Router>
      </div>
     );
   }
 }
 




