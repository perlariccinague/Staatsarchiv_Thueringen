if(document.getElementById('gallery')) {
  const gallery = document.getElementById('gallery');
  const imgTag = document.createElement('img');
  const canvasTag = document.createElement('canvas');
  const allGalleryAnchors = gallery.querySelectorAll('a');
  const overlay = document.createElement('div');
  const nextIcon = document.createElement('div');
  const nextIconWrapper = document.createElement('div');
  const previousIcon = document.createElement('div');
  const previousIconWrapper = document.createElement('div');
  const nextIconContent = document.createTextNode('C');
  const previousIconContent = document.createTextNode('C');
  const closeIcon = document.createElement('div');
  const closeIconContent = document.createTextNode('×');
  let showingImage = 0;

  function showPDF(anchor) {
    canvasTag.style.display = 'block';
    loadingTask = pdfjsLib.getDocument(anchor.href);
    (async () => {
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      const outputScale = window.devicePixelRatio || 1;
      const canvas = canvasTag;
      const context = canvas.getContext("2d");

      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = Math.floor(viewport.width) + "px";
      canvas.style.height = Math.floor(viewport.height) + "px";

      const transform = outputScale !== 1
        ? [outputScale, 0, 0, outputScale, 0, 0]
        : null;
      const renderContext = {
        canvasContext: context,
        transform,
        viewport,
      };
      page.render(renderContext);
    })();
  }

  function setImage(number) {
    imgTag.style.display = 'none';
    canvasTag.style.display = 'none';
    if(allGalleryAnchors[number].children[0].tagName === 'CANVAS') {
      showPDF(allGalleryAnchors[number]);
    } else {
      imgTag.style.display = 'block';
      imgTag.classList.remove('portrait');
      imgTag.classList.remove('landscape');
      imgTag.setAttribute('src', allGalleryAnchors[number].href);
      const imgHeight = imgTag.naturalHeight;
      const imgWidth = imgTag.naturalWidth;
      if(imgHeight > imgWidth) {
        imgTag.classList.add('portrait');
      } else {
        imgTag.classList.add('landscape');
      }
    }
  }

  function showPreviousImage() {
    if(showingImage > 1) {
      nextIcon.style.display = "block";
      setImage(showingImage-1);
      showingImage--;
    } else {
      setImage(0);
      previousIcon.style.display = "none";
      showingImage = 0;
    }
  }

  function showNextImage() {
    if(showingImage < allGalleryAnchors.length-2) {
      previousIcon.style.display = "block";
      setImage(showingImage+1);
      showingImage++;
    } else {
      setImage(allGalleryAnchors.length-1)
      nextIcon.style.display = "none";
      showingImage = allGalleryAnchors.length-1;
    }
  }

  document.body.appendChild(imgTag);
  document.body.appendChild(canvasTag);
  document.body.appendChild(previousIconWrapper);
  document.body.appendChild(nextIconWrapper);
  document.body.appendChild(closeIcon);
  document.body.appendChild(overlay);
  previousIconWrapper.appendChild(previousIcon);
  nextIconWrapper.appendChild(nextIcon);
  nextIcon.appendChild(nextIconContent);
  previousIcon.appendChild(previousIconContent);
  closeIcon.appendChild(closeIconContent);
  imgTag.classList.add('gallery-image');
  canvasTag.classList.add('gallery-canvas');
  overlay.classList.add('gallery-overlay');
  previousIconWrapper.classList.add('icon-wrapper');
  previousIconWrapper.classList.add('previous-icon-wrapper');
  nextIconWrapper.classList.add('icon-wrapper');
  nextIconWrapper.classList.add('next-icon-wrapper');
  previousIcon.classList.add('gallery-previous-icon');
  previousIcon.classList.add('gallery-icon');
  nextIcon.classList.add('gallery-next-icon');
  nextIcon.classList.add('gallery-icon');
  closeIcon.classList.add('gallery-close-icon');

  closeIcon.addEventListener('click', function() {
    overlay.style.display = "none";
    imgTag.style.display = "none";
    canvasTag.style.display = "none";
    nextIconWrapper.style.display = "none";
    previousIconWrapper.style.display = "none";
    closeIcon.style.display = "none";
  })

  allGalleryAnchors.forEach((anchor, index) => {
    const imageURL = anchor.href;
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      showingImage = index;
      overlay.style.display = "block";
      previousIconWrapper.addEventListener('click', showPreviousImage, false);
      nextIconWrapper.addEventListener('click', showNextImage, false);
      if (index < allGalleryAnchors.length-1) {
        nextIconWrapper.style.display = "block";
      }
      if (index > 0) {
        previousIconWrapper.style.display = "block";
      }
      closeIcon.style.display = "block";
      if(event.target.tagName === 'CANVAS') {
        showPDF(anchor);
      } else {
        imgTag.style.display = "block";
        imgTag.setAttribute('src', imageURL);
        const imgHeight = imgTag.naturalHeight;
        const imgWidth = imgTag.naturalWidth;
        if(imgHeight > imgWidth) {
          imgTag.classList.add('portrait');
        } else {
          imgTag.classList.add('landscape');
        }
      }
    })
  })
}

