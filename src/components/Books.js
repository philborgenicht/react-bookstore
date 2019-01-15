import React, {Component} from 'react'
import Book from './Book.js'

const Books = (props) => {
  return (
    <div className="container-fluid">
      <h1>books</h1>

      <div className="list-group">

        <div className="list-group-item">

          <div className="row">

            <div className="col-lg-3">title</div>
            <div className="col-lg-3">author</div>
            <div className="col-lg-3">pages</div>
            <div className="col-lg-3">price</div>

          </div>
        </div>
        <div>
        {props.bookList.map(book =>
          <Book addToCart={props.addToCart}
                key={book.id}
                title={book.title}
                author={book.author}
                pages={book.pages}
                incart={book.inCart}
                price={book.price}/>)}

        </div>
      </div>
    </div>
  )
}


export default Books
