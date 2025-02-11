import React, { Component } from 'react';
import rt from './rt.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center' >
        <img src={rt} alt="error in loading gif" id='spinner'/>
      </div>
    );
  }
}


  