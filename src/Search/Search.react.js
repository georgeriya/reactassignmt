import React from 'react';

import './Search.css';

const Search = () => {

    return (
        <div className='search_wrapper'>
             
             <div className='searchform_wrapper'>
                <form>
                    <input type="text" placeholder="Search Terms" name='searchTerms'/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        </div>
    );

}

export default Search;