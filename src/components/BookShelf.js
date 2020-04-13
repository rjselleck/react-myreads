import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


const BookShelf = props => {
  const { books, updateBookStatus } = props;
  const eachShelf = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];

  // go through each self and get books
  return (
    <div className="list-books-content">
      {eachShelf.map((shelf, index) => {
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.filter(books => books.shelf === shelf.type).map(filteredBook => (
                  <Book
                    key={filteredBook.id}
                    book={filteredBook}
                    books={books}
                    updateBookStatus={updateBookStatus}
                  />
                ))}
              </ol>
            </div>
          </div>
        );
      })}
    </div>
  )
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookStatus: PropTypes.func.isRequired
};

export default BookShelf