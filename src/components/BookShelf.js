import React from 'react'
// import PropTypes from 'prop-types'
import Book from './Book'



const BookShelf = props => {
  const { books } = props;


  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {/* loop through and pass state as prop */}
              {books.filter(books => books.shelf === 'currentlyReading').map(filteredBook => (
                <Book key={filteredBook.id} book={filteredBook} />
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {/* loop through and pass state as prop */}
              {books.filter(books => books.shelf === 'wantToRead').map(filteredBook => (
                <Book key={filteredBook.id} book={filteredBook} />
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {/* loop through and pass state as prop */}
              {books.filter(books => books.shelf === 'read').map(filteredBook => (
                <Book key={filteredBook.id} book={filteredBook} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}


export default BookShelf