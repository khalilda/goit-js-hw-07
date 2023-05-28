import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.01-gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = '#';

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.smallImage;
  image.alt = item.description;
  image.setAttribute('data-source', item.largeImage);

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  gallery.appendChild(galleryItem);
});

gallery.addEventListener('click', event => {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== 'IMG') return;

  const largeImageURL = target.dataset.source;

  const lightbox = basicLightbox.create(`
    <img src="${largeImageURL}" alt="Full Size Image" />
  `);

  lightbox.element().querySelector('img').src = largeImageURL;

  lightbox.show();

  const closeLightbox = () => lightbox.close();
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
});

console.log(galleryItems);
