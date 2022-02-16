import MovieList from '../MovieList/MovieList'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';


function Home() {
    const [data, setData] = useState([]);
    const getMovies = async () => {
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/trending`)
            .then(res => {
                return res.data;
            }).catch((err) => {
                // onsole.log(err);
            })
    }
    useEffect(() => {
        void(async()=>{
            let data = await getMovies();
            setData(data);
        })();
    }, [])
    console.log(data)

    return (
        <>
        <MovieList data={data}/>
          
        </>
    )
}
export default Home;