import React, {Component} from 'react'

const CartItem = (props) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-lg-3">{props.title}</div>

        <div className="col-lg-3">${props.price.toFixed(2)}</div>



      </div>
    </div>
  )
}
export default CartItem
