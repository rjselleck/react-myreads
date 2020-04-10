import React from 'react'
import Book from './Book'
// import PropTypes from 'prop-types'


const SearchResults = props => {

  const { books, updateBookStatus, searchError, searchResults } = props;

  return (
    <div className="search-books-results">
      {searchError && (<p>No books found</p>)}
      <div>
        <ol className="books-grid">
          {searchResults.map(book => (
            <Book
              book={book}
              books={books}
              updateBookStatus={updateBookStatus}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default SearchResults