const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';

export const flickrImages = (searchQuery) => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;
  return fetch(FLICKR_API_ENDPOINT)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.photos.photo.map(({ farm, server, id, secret, title }) => ({
        id,
        title,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }));
    });
};

const PX500_API_KEY = 'CLmpqnpwGLKetORtjc5gb9tC2hllfd6cqdfzHqFD';

export const searchImages = (searchQuery) => {
  const API_ENDPOINT = `https://api.500px.com/v1/photos/search?term=${searchQuery}&consumer_key=${PX500_API_KEY}&image_size=600&rpp=20`;
  return fetch(API_ENDPOINT)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.photos.map(({ id, name, image_url }) => ({
        id,
        title: name,
        mediaUrl: image_url
        // mediaUrl: image_url
      }));
    });
};
