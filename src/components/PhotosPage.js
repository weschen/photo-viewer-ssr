import React from 'react';
import {Link, Route} from 'react-router-dom';
import PropTypes from 'prop-types'; 

const PhotosPage = ({ images, onHandleSelectImage, selectedImage }) => (
    <div className="card-container">
      {images.map(image => (
        <div key={image.id} onClick={onHandleSelectImage.bind(this, image)}
              className="card">
          <Link to={`/image/${image.id}`}>
            <img src={image.mediaUrl} alt={image.title} id={image.id}/>
          </Link>
        </div>
      ))}

    </div>
);

PhotosPage.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.object,
  onHandleSelectImage: PropTypes.func.isRequired
};

export default PhotosPage;
