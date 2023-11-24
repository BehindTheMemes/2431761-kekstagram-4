import {generatePhotosArray} from '/js/data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

function createPictureElement(photo) {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__img').alt = photo.description;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

  return pictureElement;
}

function renderPictures() {
  const photosArray = generatePhotosArray();
  const fragment = document.createDocumentFragment();

  photosArray.forEach((photo) => {
    fragment.appendChild(createPictureElement(photo));
  });

  picturesContainer.appendChild(fragment);
}

export {renderPictures};
