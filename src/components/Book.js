import React from 'react'
// import PropTypes from 'prop-types'
// import BookStatus from './BookStatus'


class Book extends React.Component {
  render() {

    const { title, author, image } = this.props.book;

    return (
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}>

              </div>

              <BookStatus />

            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
          </div>
        </li>
      </div >
    )
  }
}


class BookStatus extends React.Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
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


export default Book