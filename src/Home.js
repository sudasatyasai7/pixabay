import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        data && navigate(`/Search/${data}`);
    };

    return (
        <div className='bg'>
            <h3>Pixabay</h3>
            <div className='Auth'>
                <button className='a'>LogIn</button> &nbsp;
                <button className='a'>SignUp</button>
            </div>
            <div>
                <center>
                    <h1>Stunning royalty-free images & royalty-free stock</h1>
                    <h2>Over 4.3 million+ high quality stock images, videos, and music shared by our talented community</h2>
                    <input
                        type='text'
                        size='60'
                        placeholder='search images'
                        onChange={(e) => setData(e.target.value)}
                        value={data}
                    />
                    <br />
                    <br />
                    <button onClick={handleSearch}>Search</button>
                </center>
            </div>
        </div>
    );
};

export default Home;