import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import './FavList.css';
function FavList() {
    const [data, setData] = useState([]);

    const getMovie = async () => {
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/favorite`)
            .then(res => {
                // console.log(res.data)
                setData(res.data) ;
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        
            getMovie();
            
        
    }, []);
    // console.log(data)
    const deleteMovie = async (id)=>{
      await  axios.delete(`${process.env.REACT_APP_BASE_URL}/DELETE/${id}`)
      .then(()=>{
          console.log('deleted')
          getMovie();
      }).catch((err)=>{
          console.log(err);
      })
    }

    return (
        <>
            <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((ele) => (
                            <Col key={ele.id} md={4}>
                                <Card className='div-card'>
                                    <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                        <Card.Text>
                                            {ele.overview}
                                        </Card.Text>
                                        <Card.Text>
                                            {ele.comment}
                                        </Card.Text>
                                        <div>
                                            <Button className='div-card-button' variant="primary" >Update</Button>
                                            <Button className='div-card-button' variant="danger" 
                                            onClick={()=>deleteMovie(ele.id)}
                                            >Delete</Button>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }
        </>
    )
}
export default FavList;