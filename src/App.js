import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './components/Books.js'
import Book from './components/Book.js'
import Cart from './components/Cart.js'



class App extends Component {
  state = {



    books: []
    }

    async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json})
    }

reorganize=(e)=>{
  e.preventDefault()
  let newstate= this.state.books.filter(book=> book.title.toLowerCase().includes(e.target.search.value.toLowerCase()))
  this.setState({
    books: newstate
  })
}

sortByTitle=(e)=>{
  e.preventDefault()
  this.setState({
    books: this.state.books.sort((a,b)=>{
      if(a.title<b.title){
        return -1
      }
      if(a.title>b.title){
        return 1
      }
      else{
        return 0
      }
    })
  })
}
sortByAuthor=(e)=>{
  e.preventDefault()
  this.setState({
    books: this.state.books.sort((a,b)=>{
      if(a.author<b.author){
        return -1
      }
      if(a.author>b.author){
        return 1
      }
      else{
        return 0
      }
    })
  })
}
//change state of book clicked from incart: false to incart: true
addToCart=(e)=>{
  e.preventDefault()
  let title = e.target.name
  let newState = this.state
  console.log(newState)
  let avail=newState.books
  console.log(avail)
  let selection=avail.filter(book=> book.title===title)[0]
  let newSelection= {...selection, inCart: true}
  console.log("selection:", selection)
  console.log(newSelection)
  let selectionIndex= this.state.books.indexOf(selection)
  this.setState(
    {
      books: [...this.state.books.slice(0, selectionIndex), newSelection ,...this.state.books.slice(selectionIndex+1)]
    }
  )
}

//remove from cart
removeCart=(e)=>{
  e.preventDefault()
  let title = e.target.name
  let newState = this.state
  let avail=newState.books
  let selection=avail.filter(book=> book.title===title)[0]
  let newSelection= {...selection, inCart: false}
  let selectionIndex= this.state.books.indexOf(selection)
  this.setState(
    {
      books: [...this.state.books.slice(0, selectionIndex), newSelection ,...this.state.books.slice(selectionIndex+1)]
    }
  )
}





    render() {
    return (
      <div className="App">
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-6">
<br/><br/>

      <Books bookList={this.state.books} sortByTitle={this.sortByTitle} addToCart={this.addToCart} />
</div>
<div className="col-lg-6">


<br/><br/><br/><br/>
<form onSubmit={this.reorganize}>
<input type="text" id="search" name="search" placeholder="search for book..."/>
<br/><br/>
<button type="submit">search</button>
<br/><br/>
<button onClick={this.sortByTitle}>Sort by Book Title</button>
<br/><br/>
<button onClick={this.sortByAuthor}>Sort by Author Name</button>
<br/><br/>
</form>
<br/><br/>
  <Cart booksInCart={this.state.books} removeCart={this.removeCart}/>

</div>


</div>
</div>
</div>





    )
    }


}

export default App;
