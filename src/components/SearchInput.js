import React from 'react'
import PropTypes from 'prop-types'


const SearchInput = props => {

  const { searchBooks, searchQuery } = props;

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchQuery}
        onChange={(event) => searchBooks(event.target.value)}
      />
    </div>
  )
};

SearchInput.propTypes = {
  searchBooks: PropTypes.func.isRequired
};

export default SearchInput