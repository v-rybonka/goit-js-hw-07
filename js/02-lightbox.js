import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryCards = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCards);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title = "${description}" />
</a></li>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  let gallery = new SimpleLightbox(".gallery a");
  gallery.on("show.simplelightbox", function () {});
}
