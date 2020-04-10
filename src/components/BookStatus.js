import React from 'react'
import PropTypes from 'prop-types'

class BookStatus extends React.Component {

  // change book status 
  handleChangeStatus = event => {
    this.props.updateBookStatus(this.props.book, event.target.value)
  };

  render() {

    const { book, books } = this.props;

    // set default status to none, then set status based on state
    let bookStatus = 'none';
    let b;
    for (b of books) {
      if (b.id === book.id) {
        bookStatus = b.shelf;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select defaultValue={bookStatus} onChange={this.handleChangeStatus}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

BookStatus.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  updateBookStatus: PropTypes.func.isRequired
};

export default BookStatus