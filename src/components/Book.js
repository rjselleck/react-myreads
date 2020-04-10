import React from 'react'
import PropTypes from 'prop-types'
import BookStatus from './BookStatus'
import missing from '../images/missing.jpg'

const Book = props => {

  const { book, books, updateBookStatus } = props;

  const title = book.title;

  // go through authors and assign authorList
  const authorList = book.authors
    ? book.authors.map((author, index) => (<div key={index} className="book-authors">{author}</div>))
    : <div key="0" className="book-authors">Author Unkown</div>;

  // assign bookImage the actual image or missing image
  const bookImage = book.imageLinks && book.imageLinks.thumbnail
    ? book.imageLinks.thumbnail
    : missing;


  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}>
          </div>
          <BookStatus
            book={book}
            books={books}
            updateBookStatus={updateBookStatus}
          />
        </div>
        <div className="book-title">{title}</div>
        {authorList}
      </div>
    </li>
  )
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  updateBookStatus: PropTypes.func.isRequired
};

export default Book