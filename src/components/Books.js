import React, {Component} from 'react'
import Book from './Book.js'

const Books = (props) => {
  return (
    <div className="container-fluid">
      <h1>books</h1>

      <div className="list-group">

        <div className="list-group-item">

          <div className="row">

            <div className="col-md-2">title</div>
            <div className="col-md-2">author</div>
            <div className="col-md-2">pages</div>


          </div>
        </div>
        <div>
        {props.bookList.map(book =>
          <Book key={book.id}
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
