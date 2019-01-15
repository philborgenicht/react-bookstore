import React, {Component} from 'react'



const Book = (props) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-lg-3">{props.title}</div>
        <div className="col-lg-3">{props.author}</div>
        <div className="col-lg-3">{props.pages}</div>
        <div className="col-lg-3">${props.price.toFixed(2)}</div>


        <button onClick={props.addToCart} name={props.title} >purchase</button>


      </div>
    </div>
  )
}



export default Book
