import React, { useEffect, useState } from 'react';
import './CompDesign.css';
import ImgComponent from './ImgComponent';
import ApiCall from './ApiCall';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import searchIcon from '../Image/search-icon.png'



const Search = () => {
    const [data, setData] = useState();
    const [inputData, setInputData] = useState();
    const [searchQuery, setSearchQuery] = useState();
    const [emptyText, setEmptyText] = useState();
    
    


    useEffect(() => {
        resultFunction(searchQuery);
    }, [0, searchQuery]);

    const resultFunction = async (searchQuery) => {
        const result = await ApiCall(searchQuery);
        setData(result);
    }

    const handleInput = (event) => {
        setInputData(event.target.value);
    }
    const handleSearch = (event) => {
        console.log('inputData...', inputData);
        setEmptyText('');
        setSearchQuery(inputData);
    }

    return (
        <>
            <h1>SnapShot</h1>
            <div className='search-container'>
                <input type='text' placeholder='search your image' onChange={handleInput} value={emptyText} />
                <button onClick={handleSearch}>
                    <img src={searchIcon} alt='search-icon' />
                </button>
            </div>
            <ImgComponent data={data} />
        </>
    )
}

export default Search
