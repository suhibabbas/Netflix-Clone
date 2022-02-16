import Movie from '../Movie/Movie';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';

function MovieList(preps) {

    

    return (
        <>
           <Container className='div-container'>
                <Row md={3}>
                    {
                        preps.data.length && preps.data.map((ele) => (
                            <Col key={ele.id} md={4}>
                                <Movie mov={ele}/>
                           </Col>
                        ))
                    }
             </Row>
             </Container>
            {/* {
                !preps.data.length && <div><h2>no data</h2></div>
            } */}
          
        </>
    )
}
export default MovieList;