import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute('data-source', item.original);

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
  
  const original = target.dataset.source;

  const lightbox = basicLightbox.create(`
    <img src="${original}" alt="Full Size Image" />
  `);

  lightbox.element().querySelector('img').src = original;

  lightbox.show();

  const closeLightbox = () => lightbox.close();
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
});


console.log(galleryItems);
