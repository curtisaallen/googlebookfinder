import React, { Component } from 'react';

class Input extends Component {
 constructor(props) {
    super(props);
  }
  handleChange(event) {
    //console.log(event.target.value);
    this.props.onInput(event.target.value);
  }  
  render() {
    return (
    <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#"><i className="fa fa-bookmark" aria-hidden="true"></i>
 Google Book Finder</a>
        </div>
        <div className="col-sm-3 col-md-5 pull-right">
            <i className="fa fa-search" aria-hidden="true"></i>
            <form className="navbar-form" role="search">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" onChange={this.handleChange.bind(this)}  />
            </div>
            </form>
        </div>
      </div>
    </nav>

    );
  }
}

export default Input;