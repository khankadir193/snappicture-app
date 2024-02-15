import React, { useEffect } from 'react';
import './CompDesign.css';
import ImgComponent from './ImgComponent';
import ApiCall from './ApiCall';


const Search = () => {

    // useEffect(async() => {
    //     // const result = await ApiCall();
    //     // setData(result);
    //     // console.log('result...??', result);
    //     await resultFunction();
    // }, [0]);

    // const resultFunction = async () => {
    //     const result = await ApiCall();
    //     console.log('result...??', result);
    // }
    
    return (
        <>
            <h1>SnapShot</h1>
            <div className='search-container'>
                <input type='text' placeholder='search your image' />
                <button>Search</button>
            </div>
            <ImgComponent />
        </>
    )
}

export default Search
