import React from 'react'
// input -> search-input-tag
import  './SearchBar.css'
const SearchBar = ({searchedcity,setsearchedcity}) => {
    return (
        <form action="" class="search-bar">
	<input className="inputt" placeholder="Search Placename..." style={{border:'none'}}  value={searchedcity} onChange={ (event)=>setsearchedcity(event.target.value)} type="search" name="search" pattern=".*\S.*" required />
	<button class="search-btn">
		<span>Search</span>
	</button>
</form>
    )
}

export default SearchBar
