import React, {Component} from 'react'

import Book from './Book.js'
import CartItem from './CartItem.js'


class Cart extends Component {





render(){
  return(
    <div className="list-group">
      <div className="list-group-item">
      <div className="row">


      <div className="col-lg-12">Shopping Cart</div>


      <div>
      {this.props.booksInCart.filter(book =>(book.inCart===true)).map(book=>(
        <CartItem
              removeCart={this.props.removeCart}

              title={book.title}

              price={book.price}/>))}

      </div>
      <div className="col-md-6">TOTAL: ${this.props.booksInCart.filter(book =>(book.inCart===true)).map(book=> book.price).reduce((sum,num)=>sum+num,0)}</div>
      </div>
      </div>
    </div>
  )
}



}

export default Cart
