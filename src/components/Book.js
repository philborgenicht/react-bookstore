import React, {Component} from 'react'



const Book = (props) => {
  return (
    <div className="list-group-item">
      <div className="row">

        <div className="col-md-2">{props.title}</div>
        <div className="col-md-2">{props.author}</div>
        <div className="col-md-8">{props.pages}</div>

        <div className="col-md-2">${props.price.toFixed(2)}</div>
        <button>purchase</button>

      </div>
    </div>
  )
}



export default Book
