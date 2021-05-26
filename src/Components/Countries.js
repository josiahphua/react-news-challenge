import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Country from './Country'
import {Container, Row, Col, Card} from 'react-bootstrap';

function Countries() {
    let { country } = useParams();

    const [countries, setCountries] = useState('');
    const [news, setNews] = useState([]);

    useEffect(()=>{
        
        async function getNews(){
            let res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=bd3c2a3b90a5455e83a18c7e4e18c98d`)
            setNews(res.data.articles)
        }
        getNews();

    },[country])

    return (
        <Container>
            <Row>
                <h3>News of {country}</h3>
                {news.map(({title, description, url, urlToImage}) => (
                    <Col>
                    <Card>
                        <Country
                                title={title}
                                description={description}
                                url={url}
                                urlToImage={urlToImage}
                        />
                    </Card>
                        
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Countries;