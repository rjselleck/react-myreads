import React from 'react'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book'



class BookSearch extends React.Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <SearchInput />
          </div>
          <div className="search-books-results">
            <SearchResults />
          </div>
        </div>
      </div>
    )
  }
}

class SearchInput extends React.Component {
  render() {
    return (
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input type="text" placeholder="Search by title or author" />

      </div>
    )
  }
}

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <ol className="books-grid">
          <Book />
        </ol>
      </div>
    )
  }
}

export default BookSearch