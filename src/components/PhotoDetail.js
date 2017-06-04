import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ImageRepository} from '../repository/imageRepository'

export default class PhotoDetail extends Component {

  render() {

    var imageId = this.props.match.params.imageId;
    var image = ImageRepository.getImageById(imageId);

    return (
       <div>
          <div id="title-bar">
            <Link to="/" title="Back to Image Library">
                 <svg id="back" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
                    </path>
                 </svg>
            </Link>
            <span id="title">
              Image Detail - {image.title} 
            </span>
          </div>

        {image ? 
        <div>

          <div className="card-container">
              <div className="image-title">
                 <h3>{image.title}</h3>   
              </div>
              <div className="image-detail">
                <img src={image.mediaUrl} alt={image.title} id={image.id}/>
              </div> 
            </div>
          </div>: 'loading ....'}
      </div>
    );
  }
}
