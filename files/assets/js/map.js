const imgTag = document.createElement('img');
const overlay = document.createElement('div');
const closeIcon = document.createElement('div');
const closeIconContent = document.createTextNode('×');
const zoomIcon = document.createElement('div');
closeIcon.appendChild(closeIconContent);
imgTag.classList.add('fullscreen-image');
overlay.classList.add('fullscreen-overlay');
closeIcon.classList.add('fullscreen-close-icon');
zoomIcon.classList.add('zoom-icon');

closeIcon.addEventListener('click', function() {
  overlay.style.display = "none";
  imgTag.style.display = "none";
  closeIcon.style.display = "none";
})

const imageClickHandler = (image) => {
  image.parentElement.addEventListener('click', (event) => {
    event.preventDefault();
    imgTag.src = image.src;
    imgTag.style.display = 'block';
    overlay.style.display = 'block';
    closeIcon.style.display = 'block';
  })
}

if(document.querySelector('#container #main .inside .mod_article .ce_image .image_container a img')) {
  document.body.appendChild(imgTag);
  document.body.appendChild(overlay);
  document.body.appendChild(closeIcon);

  const allClickableImages = document.querySelectorAll('#container #main .inside .mod_article .ce_image .image_container a img');
  allClickableImages.forEach(image => {
    image.parentElement.appendChild(zoomIcon);
    image.parentElement.style.position = 'relative';
    imageClickHandler(image);
  })
}
