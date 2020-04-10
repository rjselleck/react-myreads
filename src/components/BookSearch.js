import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import SearchInput from './SearchInput'
// import SearchResults from './SearchResults'

import SearchResults from './SearchResults'


class BookSearch extends React.Component {

  state = {
    searchQuery: '',
    searchResults: [],
    searchError: false
  }


  searchBooks = event => {

    const query = event;

    this.setState({ searchQuery: query });

    //search data for matches
    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        books.length > 0
          ? this.setState({ searchResults: books, searchError: false })
          : this.setState({ searchResults: [], searchError: true })
      });
    } else {
      //empty query - reset state to default
      this.setState({ searchResults: [], searchError: false })
    }
  }

  render() {

    const { searchQuery, searchResults, searchError } = this.state;
    const { books, updateBookStatus } = this.props;

    return (
      <div className="search-books">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <SearchInput
              searchBooks={this.searchBooks}
              searchQuery={searchQuery}
            />
          </div>
          <SearchResults
            books={books}
            updateBookStatus={updateBookStatus}
            searchError={searchError}
            searchResults={searchResults}
          />
        </div>
      </div>
    )
  }
}

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookStatus: PropTypes.func.isRequired
};

export default BookSearch