import { galleryItems } from './gallery-items.js';
// Change code below this line
const lightbox = basicLightbox.create(`
<img src="${largeImageURL}" alt="Full Size Image" />
`);


lightbox.element().querySelector('img').src = largeImageURL;

lightbox.show();


const closeLightbox = () => lightbox.close();
document.addEventListener('keydown', event => {
if (event.key === 'Escape') {
  closeLightbox();
};
});
console.log(galleryItems);
