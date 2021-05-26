import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap';
import Country from './Country'

function MainPage(){
    const [singapore, setSin] = useState([]);
    const [nigeria, setNg] = useState([]);
    const [malaysia, setMy] = useState([]);
    const [saudi, setSa] = useState([])

    useEffect(()=>{
        (async function gettingNews(){
            let sin = await axios.get('https://newsapi.org/v2/top-headlines?country=sg&apiKey=bd3c2a3b90a5455e83a18c7e4e18c98d')
            setSin(sin.data.articles);

            let my = await axios.get('https://newsapi.org/v2/top-headlines?country=my&apiKey=bd3c2a3b90a5455e83a18c7e4e18c98d')
            setMy(my.data.articles);

            let ng = await axios.get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=bd3c2a3b90a5455e83a18c7e4e18c98d')
            setNg(ng.data.articles);

            let sa = await axios.get('https://newsapi.org/v2/top-headlines?country=sa&apiKey=bd3c2a3b90a5455e83a18c7e4e18c98d')
            setSa(sa.data.articles);
        })()
 
    },[])

    return(
        <Container>
            <Row>
                <Container>
                    <h3>SINGAPORE </h3>
                    <Row>
                        {singapore.map(({title, description, url, urlToImage}) => (
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
            </Row>
            <hr />
            <Row>
                <Container>
                    <h3>NIGERIA </h3>
                    <Row>
                        {nigeria.map(({title, description, url, urlToImage}) => (
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
            </Row>
            <hr />
            <Row>
                <Container>
                    <h3>MALAYSIA </h3>
                    <Row>
                        {malaysia.map(({title, description, url, urlToImage}) => (
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
            </Row>
            <hr />
            <Row>
                <Container>
                    <h3>SAUDI ARABIA </h3>
                    <Row>
                        {saudi.map(({title, description, url, urlToImage}) => (
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
            </Row>
        
        </Container>
        
    )
}


export default MainPage