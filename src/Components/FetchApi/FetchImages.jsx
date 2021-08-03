// import React from 'react'

function FetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=21859800-af94843fb327cc57780ddd667&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`There is no images with name ${name}`));
  });
}

const FetchApi = { FetchImages };
export default FetchApi;
