import React, { Component } from 'react';
import StarRating from 'react-star-rating';

class ListItem extends Component {
 constructor(props) {
    super(props);
  } 
  render() {
    return (
        <div className="list-group">
            <div className="list-group-item">
            <div className="row">  
                <div className="col-md-3">
                   <img src={this.props.data.volumeInfo.imageLinks.smallThumbnail} className="img-responsive" />
                </div>
                <div className="col-md-9">
                    <h4 className="list-group-item-heading">{this.props.data.volumeInfo.title}</h4>
                    <h6 className="list-group-item-text">{this.props.data.volumeInfo.subtitle}</h6>
                    <StarRating interactive={false} rating={this.props.data.volumeInfo.averageRating} />
                    <p className="list-group-item-text">{this.props.data.volumeInfo.description}</p>
                    <a href={this.props.data.volumeInfo.previewLink} className="btn btn-primary" target="_blank" role="button">Preview Link</a>
                 </div>
            </div>
            </div>
        </div>
    );
  }
}

export default ListItem;