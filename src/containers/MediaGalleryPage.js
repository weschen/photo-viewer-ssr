import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import {
  selectImageAction, searchMediaAction
} from '../actions/mediaActions';
import PhotosPage from '../components/PhotosPage';
import '../styles/style.css';

export class MediaGalleryPage extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

  handleSelectImage(selectedImage) {
    this.props.dispatch(selectImageAction(selectedImage));
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  render() {
    const { images, selectedImage } = this.props;
    return (
      <div className="container-fluid">
        {images && selectedImage ? <div>
          <div className="search-bar">
            <div className="input-group">
              <input
                type="text"
                className="form-control" 
                ref={ref => (this.query = ref)}
              />
              <span className="input-group-btn">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Search"
                  onClick={this.handleSearch}
                />
              </span>
            </div>
          </div>
          <div className="row">
            <PhotosPage
              images={images}
              selectedImage={selectedImage}
              onHandleSelectImage={this.handleSelectImage}
            />
          </div>
        </div> : 'loading ....'}
      </div>
    );
  }
}

MediaGalleryPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ images }) => ({
  images: images[0],
  selectedImage: images.selectedImage
});

/* connect method from react-router connects the component with redux store */
export default connect(
  mapStateToProps)(MediaGalleryPage);
