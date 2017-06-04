import initialState from './initialState';
import * as types from '../constants/actionTypes';
import {ImageRepository} from '../repository/imageRepository'

export default function (state = initialState.images, action) {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      ImageRepository.setImages(action.images);
      return [...state, action.images];
    case types.SELECTED_IMAGE:
      return { ...state, selectedImage: action.image };
    default:
      return state;
  }
}
