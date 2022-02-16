import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';


function Movie(ele) {
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = ()=>setShow(false);

    return (
        <>


            {


                <Card className='div-card'>
                    <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500/${ele.mov.poster_path}`} />
                    <Card.Body>
                        <Card.Title className='div-card-title'><h2>{ele.mov.title}</h2></Card.Title>
                        <Card.Text>
                            {ele.mov.overview}
                        </Card.Text>
                        <div>
                            <Button className='div-card-button' variant="primary"
                                onClick={() => {
                                    setCardInfo(ele.mov)
                                    setShow(true);
                                }}>Add To Favorite</Button>
                        </div>
                    </Card.Body>
                </Card>


            }
            {
                <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose}/>
            }


            {
                // !preps.data.length && <div><h2>no data</h2></div>
            }
        </>
    )
}
export default Movie;