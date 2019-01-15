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
  this.setState({
    books: this.state.books.filter(book=> book.title.toLowerCase().includes(e.target.search.value.toLowerCase()))
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






    render() {
    return (
      <div className="App container">
<div class="row justify-content-center">
      <form onSubmit={this.reorganize}>
      <input type="text" id="search" name="search" placeholder="search for book..."/>
      <button type="submit">search</button>
      <button onClick={this.sortByTitle}>Sort by Book Title</button>
      <button onClick={this.sortByAuthor}>Sort by Author Name</button>
      </form>
</div>


      <Books bookList={this.state.books} sortByTitle={this.sortByTitle} addToCart={this.addToCart} />

  <Cart booksInCart={this.state.books}/>

      </div>


    )
    }


}

export default App;
