import React from 'react';

import './SearchContainer.css';
import Search from '../Search/Search.react';
import FetchSearchResult from '../FetchSearchResult/FetchSearchResult.react';
import QuestionData from '../QuestionData/QuestionData.react';
//same as datagrid
const SearchContainer = () => {

    return (
        <div className='searchcontainer_wrapper'>
             <h3>StackOverFlow Search</h3>
             <Search><FetchSearchResult></FetchSearchResult></Search>
             
     
        </div>
    );

}

export default SearchContainer;