import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './components/Books.js'
import Book from './components/Book.js'



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




    render() {
    return (
      <div className="App container">
      <form onSubmit={this.reorganize}>
      <input type="text" id="search" name="search" placeholder="search for book..."/>
      <button type="submit">search</button>
      <button onClick={this.sortByTitle}>Sort by Book Title</button>
      <button onClick={this.sortByAuthor}>Sort by Author Name</button>
      </form>


      <Books bookList={this.state.books}/>
      </div>


    )
    }


}

export default App;
