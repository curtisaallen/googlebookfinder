import React, { Component } from 'react';
import ListItem from './ListItem';

class BookList extends Component {
 constructor(props) {
    super(props);
  } 
  render() {
      var bookList = this.props.data.map((data, i) => {
            return (<ListItem data={data} key={i} />)
    });  
    return (
        <div className="book-list">
             {bookList}
        </div>
    );
  }
}

export default BookList;