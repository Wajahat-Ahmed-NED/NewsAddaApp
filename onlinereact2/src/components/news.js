import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewItem from './newItem'

export default function News() {
    const [articles, setArticles] = useState([])



    const getData = () => {
        const api = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5f8ff819ed22468fb9045d4069e3c75d';
        axios.get(api).then((res) => {
            console.log(res.data.articles[0]);
            // console.log(res.data.articles[i])
            // articles.push(res.data.articles[i])
            let a = res.data.articles
            setArticles(a)
            // console.log(articles)
        }).catch((err) => {
            console.log("Following error occured " + err)
        })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <div className="container" style={{textAlign:'center'}}>
                <h1 className="my-3">NewsAdda-Latest Popular News </h1>
                <div className="row">
                    {
                        articles.map((element, i) => {
                            // console.log("Done")
                            return <div className="col-md-4 my-3" key={i}>
                                <NewItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/303200/303217.4.jpg'} newsUrl={element.url} />

                            </div>


                        })

                    }


                </div>
            </div>
        </div>
    )
}





