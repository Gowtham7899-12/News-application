import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    return (
        <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor:"#f0f0f0"}}>
            <img src={this.props.imageurl} className="card-img-top " alt="loading.." />
            <div className="card-body">
            <h5 className="card-title">{this.props.title.slice(0,70)}..</h5>
            <p className="card-text">{this.props.description?this.props.description.slice(0,90):" "}...</p>
            <a href={this.props.newsurl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
            </div>
      </div>
    );
  }
}

export default NewsItem;
