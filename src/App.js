import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Input from './Component/Input';
import BookList from './Component/BookList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'JavaScript',
      books: []
    };
  }
  componentDidMount(){
    this.getBook(this.state.input);
  }
  getBook(value){
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + value)
      .then((response) => {
        this.setState({
           books: response.data.items
         });
      })
      .catch((error) => {
        console.log(error);
    });
  }
  handleChange(value) {
    this.setState({
      input: value
    });
    this.getBook(value);
  }  
  render() {
    return (
      <div>
          <Input onInput={this.handleChange.bind(this)} />
          <div className="container">
          <BookList data={this.state.books} />
          </div>  
      </div>
    );
  }
}

export default App;
