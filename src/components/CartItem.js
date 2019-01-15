import React, {Component} from 'react'

const CartItem = (props) => {
  return (
    <div className="list-group-item ">
      <div className="row">
        <div className="col-lg-5">{props.title}</div>


        <div className="col-lg-3">${props.price.toFixed(2)}</div>
        <button className="btn-danger btn-lg"name={props.title} onClick={props.removeCart}> remove from cart</button>



      </div>
    </div>
  )
}
export default CartItem
