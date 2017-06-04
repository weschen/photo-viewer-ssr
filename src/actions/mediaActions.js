import * as types from '../constants/actionTypes';

export const selectImageAction = (imageId) => ({
  type: types.SELECTED_IMAGE,
  imageId
});

export const searchMediaAction = (payload) => ({
  type: types.SEARCH_MEDIA_REQUEST,
  payload
});
