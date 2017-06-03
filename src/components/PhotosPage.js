import React from 'react';
import PropTypes from 'prop-types'; 

const PhotosPage = ({ images, onHandleSelectImage, selectedImage }) => (
  <div className="col-md-12">
    <div className="selected-image">
      <div key={selectedImage.id}>
        <h6 className="title">{selectedImage.title}</h6>
        <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
      </div>
    </div>
    <div className="image-thumbnail">
      {images.map(image => (
        <div key={image.id} onClick={onHandleSelectImage.bind(this, image)}>
          <img src={image.mediaUrl} alt={image.title} id={image.id}/>
        </div>
      ))}
    </div>
  </div>
);

PhotosPage.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.object,
  onHandleSelectImage: PropTypes.func.isRequired
};

export default PhotosPage;
