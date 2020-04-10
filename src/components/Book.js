import React from 'react'
// import PropTypes from 'prop-types'
import BookStatus from './BookStatus'
import missing from '../images/missing.jpg'

const Book = props => {

  const { book, updateBookStatus } = props;

  /* 
  * TODO: Make sure these two defaults work 
  */
  const bookImage = book.imageLinks && book.imageLinks.thumbnail
    ? book.imageLinks.thumbnail
    : missing;
  const title = book.title ? book.title : 'No title available';

  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}>
            </div>
            <BookStatus book={book} updateBookStatus={updateBookStatus} />
          </div>
          <div className="book-title">{title}</div>
          {book.authors && book.authors.map((author, index) => (
            <div key={index} className="book-authors">{author}</div>
          ))}

        </div>
      </li>
    </div>
  )
}

export default Book