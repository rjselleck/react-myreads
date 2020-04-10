import React from 'react'
// import PropTypes from 'prop-types'

class BookStatus extends React.Component {

  handleChangeStatus = event => {
    this.props.updateBookStatus(this.props.book, event.target.value)
  }

  render() {

    const { book } = this.props;

    return (
      <div className="book-shelf-changer">
        <select defaultValue={book.shelf} onChange={this.handleChangeStatus}>
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

export default BookStatus