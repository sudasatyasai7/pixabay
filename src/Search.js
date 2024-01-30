// Search.js

import React,{useEffect,useState} from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Search = () => {
    const[data,setData]=useState([]);
    const { da } = useParams();
    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=42073454-00db0e2228900639dfa227671&q=${da}&image_type=photo
        `).then(res=>setData(res.data.hits))
    })
    

    return (
        <div className='row'>
            {data.map(imgObj=><Card style={{ width: '18rem',margin:'25px' }}>
      <Card.Img variant="top" src={imgObj.largeImageURL} />
      <Card.Body>
        <Card.Title>{imgObj.tags}</Card.Title>
      </Card.Body>
    </Card>)}
        </div>
    );
}

export default Search;