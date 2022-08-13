import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryCards = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCards);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
     </a>
</div>
    `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  const imageLink = evt.target.dataset.source;

  if (!evt.target.classList.contains("gallery__image")) {
    return imageLink;
  }
  const instance = basicLightbox.create(`
        <img
            src="${imageLink}" width="800" height="600"/>
    `);
  instance.show();
}
