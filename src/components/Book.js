import React from 'react'
// import PropTypes from 'prop-types'
import BookStatus from './BookStatus'
import missing from '../images/missing.jpg'

const Book = props => {

  const { book, books, updateBookStatus } = props;

  const title = book.title;

  let authorList;
  if (book.authors) {
    authorList = book.authors.map((author, index) => (
      <div key={index} className="book-authors">{author}</div>
    ));
  } else {
    authorList = <div key="0" className="book-authors">Author Unkown</div>
  }

  const bookImage = book.imageLinks && book.imageLinks.thumbnail
    ? book.imageLinks.thumbnail
    : missing;


  return (
    <div>
      <li>
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
    </div>
  )
}

export default Book