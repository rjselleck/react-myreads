import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import BookShelf from './BookShelf'


const BookList = props => {
  const { books, updateBookStatus } = props;

  return (
    <div className="list-books">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf books={books} updateBookStatus={updateBookStatus} />
        <div className="open-search">
          <Link to="search">
            <button>Add a Book</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default BookList