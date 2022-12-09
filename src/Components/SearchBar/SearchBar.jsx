import React from 'react'
import { SearchBox, SearchInput } from './SearchBar.css'

const SearchBar = () => {
  return (
    <SearchBox>
        <SearchInput placeholder='🔍 Search' />
    </SearchBox>
  )
}

export default SearchBar