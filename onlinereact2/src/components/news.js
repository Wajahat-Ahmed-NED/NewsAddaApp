import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewItem from './newItem'
import Button from '@mui/material/Button';
// import UnstyledButtonCustom from './Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Spinner from './spinner';

export default function News(props) {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [disable, setDisable] = useState(true)
    const [totalResult, setTotalResult] = useState(0)
    const [loading, setLoading] = useState(false)



    const getData = () => {
        const api = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5f8ff819ed22468fb9045d4069e3c75d&pageSize=${props.pageSize}`;
        setLoading(true)
        axios.get(api).then((res) => {
            console.log(res.data.totalResults)
            setTotalResult(res.data.totalResults)
            console.log(res.data.articles[0]);
            // console.log(res.data.articles[i])
            // articles.push(res.data.articles[i])
            let a = res.data.articles
            setArticles(a)
            // console.log(articles)
            setLoading(false)
        }).catch((err) => {
            console.log("Following error occured " + err)
        })
    }
    useEffect(() => {
        getData();
    }, [])
    
    const handlePrevious=()=>{
        console.log("Previous")
        setLoading(true)
        const api = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5f8ff819ed22468fb9045d4069e3c75d&page=${ page - 1}&pageSize=${props.pageSize}`;
        axios.get(api).then((res) => {
            console.log(res.data.articles[0]);
            // console.log(res.data.articles[i])
            // articles.push(res.data.articles[i])
            let a =  res.data.articles
            setArticles(a)
            // console.log(articles)
            setPage(page-1)
            setLoading(false)
        }).catch((err) => {
            console.log("Following error occured " + err)
        })
    }
    const handleNext= ()=>{
        console.log("Next")
        setLoading(true)
        const api = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5f8ff819ed22468fb9045d4069e3c75d&page=${ page + 1}&pageSize=${props.pageSize}`;
        axios.get(api).then((res) => {
            console.log(res.data.articles[0]);
            // console.log(res.data.articles[i])
            // articles.push(res.data.articles[i])
            let a =  res.data.articles
            setArticles(a)
            // console.log(articles)
            setPage(page+1)
            setDisable(false)
            setLoading(false)
        }).catch((err) => {
            console.log("Following error occured " + err)
        })
    }
    return (
        <div>
            <div className="container" >
                <h1 className="my-3">NewsAdda-Latest Popular News </h1>{
                    loading && <Spinner/>
                }
                
                <div className="row">
                    {
                        !loading && articles.map((element, i) => {
                            // console.log("Done")
                            return <div className="col-md-4 my-3" key={i}>
                                <NewItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/303200/303217.4.jpg'} newsUrl={element.url} />

                            </div>


                        })

                    }


                </div>
            </div>

            <div className="container d-flex justify-content-between">
                    {/* <button onClick={handlePrevious} disabled={page<=1?true:false} className="btn btn-outline-primary">&larr; Previous</button> */}
                    <Button onClick={handlePrevious} disabled={page<=1?true:false} variant="contained" color="error"><ArrowBackIcon/>&nbsp;&nbsp;  Previous</Button>
                    <Button onClick={handleNext} disabled={page+1 > Math.ceil(totalResult/props.pageSize) ?true:false } variant="contained" color="error"> Next &nbsp;&nbsp;<ArrowForwardIcon/></Button>
                    {/* <UnstyledButtonCustom/> */}
                    
                    {/* <button onClick={handleNext} disabled={page+1 > Math.ceil(totalResult/10) ?true:false }className="btn btn-outline-primary">&rarr; Next</button> */}
            </div>
        </div>
    )
}





