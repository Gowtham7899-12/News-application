import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading  from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    constructor(){
        super();
        this.state={
            articles:[],
            loading:true,
            pageSize:6,
            page:1,
            totalResults:0,
        }
    }

    async updateNews(){
        this.setState({
            loading:true,
            page:this.state.page+1,
        });
        this.props.progress(30)
        // console.log(this.props.api)
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=920bfcfdb33e401bb022613fc2f1252d`;
        let news = await fetch(url);
        this.props.progress(60)
        let data = await news.json();
        this.setState({
            articles:this.state.articles.concat(data.articles),
            totalResults:data.totalResults,
            loading:false,
        });
        this.props.progress(100)
        
    }

    fetchMoreData= ()=>{
        this.setState({
            page:this.state.page +1,
        })
        this.updateNews()
    }
    async componentDidMount(){
        // The method executes right after the render
        // console.log("component did mount")
        document.title=this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1) ;
           this.updateNews();
    }

    // handlenext=async()=>{
        //     this.setState({
    //         page:this.state.page+1,
    //     });
    //     this.updateNews();
   
    //     // if(!(this.state.page>Math.ceil(this.state.totalResults/this.state.pageSize)))
    //     // {
    //     //     // console.log('entered')
    //     //     this.setState({
    //     //         loading:true,
    //     //     });
    //     //     let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=920bfcfdb33e401bb022613fc2f1252d`;
    //     //     let news = await fetch(url);
    //     //     let data = await news.json();
    //     //     this.setState({
    //     //         articles:data.articles,
    //     //         totalResults:data.totalResults,
    //     //         loading:false,
    //     //     });
    //     // }
    // }
    // handleprevious=async()=>{
    //     this.setState({
    //         page:this.state.page-1,
    //     });
    //     this.updateNews();
    //     // console.log(this.state.page)
        
    //     // if(!(this.state.page>Math.ceil(this.state.totalResults/this.state.pageSize)))
    //     // {
    //     //     // console.log('entered')
    //     //     this.setState({
    //     //         loading:true,
    //     //     });
    //     //     let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=920bfcfdb33e401bb022613fc2f1252d`;
    //     //     let news = await fetch(url);
    //     //     let data = await news.json();
    //     //     this.setState({
    //     //         articles:data.articles,
    //     //         totalResults:data.totalResults,
    //     //         loading:false,
    //     //     });
    //     // }
    // }
  render() {
    // console.log('render');
    return (
      <div id="newscomp">
        <h2 className='text-center '><b>Indian Times News on {this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}</b></h2>
        {this.state.loading &&<Loading/>}
        <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Loading/>}
            >
                <div className="container">

                <div className="row my-4">
                    {
                        
                        this.state.articles.map((element)=>{
                            return(
                                <div className="col-md-4 my-2 " >
                                    <NewsItem title={element.title} key={element.url} description={element.description} newsurl={element.url} imageurl={element.urlToImage}/>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </InfiniteScroll>
        {/* <div className="button d-flex justify-content-between">
            <button type="button" disabled={this.state.page===1} className="btn btn-dark btn-sm " id='pn' onClick={this.handleprevious}>&larr; Previous</button>
            <button type="button" disabled={this.state.page>Math.ceil(this.state.totalResults/this.state.pageSize)} className="btn btn-dark btn-sm " id='pn' onClick={this.handlenext}>Next &rarr;</button>
        </div> */}
      </div>
    );
  }
}

export default News;
