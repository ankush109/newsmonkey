import React, { useEffect ,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {
  const [articles,setarticles]=useState([])
  const [loading,setloading]=useState([true])
  const [page,setpage]=useState(1)
  const [totalResults,settotalResults]=useState(0)

        // document.title =`${props.category}-AnkNews `; 
    
  const  Updatenews =async()=>{
      {
        props.setprogress(0);
        let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=80d498a1f9ba4b9f90612aafd83680bc&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        let parseddata =await data.json()
        props.setprogress(30)
       setarticles(parseddata.articles)
       settotalResults(parseddata.totalResults)
       setloading(false)
       props.setprogress(100);
    }
  }
    useEffect(() => {
    Updatenews();
    }, [])
  
 const fetchMoreData = async() => {
     setpage(page +1)
      {
        let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=80d498a1f9ba4b9f90612aafd83680bc&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        let parseddata =await data.json()
        setarticles(articles.concat(parseddata.articles))
        settotalResults(parseddata.totalResults)
    };
  }
    
    


      console.log("render");
        return (
            <div className="container my-3">
              <h1 className="text-center"  style={{ margin: '35px 0px', marginTop:'90px ' }}>AnkNews - Top Headlines from {props.category} </h1>
               {/* {state.loading && <Spinner/>} */}
               <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
                <div className="row"> 
                { articles.map((element)=>{
                     return <div className="col-md-4" key={element.url} > 
                      <NewsItem  description = {element.description?element.description.slice(0.50):""} title={element.title?element.title.slice(0,40):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                  </div>
    })}
                </div>
                </div>
                </InfiniteScroll>
                </div> 
         
        )
    
}


News.defaultProps ={
  country:'in',
  pageSize:8,
  category:'general'

}
News.propstypes ={
 country :PropTypes.string,
 pageSize: PropTypes.number,
 category:PropTypes.string
}

export default News
