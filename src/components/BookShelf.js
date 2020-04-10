import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


const BookShelf = props => {
  const { books, updateBookStatus } = props;

  // surely this could be refactured...and don't call me surely
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.filter(books => books.shelf === 'currentlyReading').map(filteredBook => (
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
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.filter(books => books.shelf === 'wantToRead').map(filteredBook => (
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
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.filter(books => books.shelf === 'read').map(filteredBook => (
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
      </div>
    </div>
  )
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookStatus: PropTypes.func.isRequired
};

export default BookShelf