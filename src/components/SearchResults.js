import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'



const SearchResults = props => {

  const { books, updateBookStatus, searchError, searchResults } = props;

  return (
    <div className="search-books-results">
      {searchError && (<p>No books found</p>)}
      <div>
        <ol className="books-grid">
          {searchResults.map(book => (
            <Book
              key={book.id}
              book={book}
              books={books}
              updateBookStatus={updateBookStatus}
            />
          ))}
        </ol>
      </div>
    </div>
  )
};

SearchResults.propTypes = {
  books: PropTypes.array.isRequired,
  searchError: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
  updateBookStatus: PropTypes.func.isRequired
};

export default SearchResults