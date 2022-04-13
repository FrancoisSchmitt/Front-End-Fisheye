class Lightbox {

  static init() {

    const links = Array.from(document.querySelectorAll('.imageLightbox,video[src$=".mp4"]'))
    const titles = Array.from(document.querySelectorAll('.title'))
    const gallery = links.map(link => link.getAttribute('src'))
    // console.log(titles)

    links.forEach(link => link.addEventListener('click', e => {
      e.preventDefault()
      new Lightbox(e.currentTarget.getAttribute('src'), gallery, titles)
      console.log(links)
    }))
    links.forEach(link => link.addEventListener('keydown', e => {
      if (e.code === 'Enter') {
        e.preventDefault()
        new Lightbox(e.currentTarget.getAttribute('src'), gallery, titles)
        console.log(links)
      }
    }))
  }



  constructor(src, images, video) {
    this.element = this.buildDOM(src)
    this.images = images
    this.video = video
    this.loadImage(src)
    this.onKeyUp = this.onKeyUp.bind(this)
    document.querySelector('.lightbox-media').appendChild(this.element)
    document.addEventListener('keyup', this.onKeyUp)
  }

  loadImage(src) {
    this.src = null;

    if (src.endsWith(".mp4")) {
      this.src = src;

      let title = document.createElement("h2");
      const container = this.element.querySelector(".lightbox__container");
      container.innerHTML = "";

      const video = document.createElement("video");

      video.setAttribute("controls", "");
      let titleImage = this.titleOfImage(this.src);
      title.innerText = titleImage;

      container.appendChild(video);
      container.appendChild(title);

      video.src = src;
    } else {

      this.src = src;

      const image = new Image();
      const container = this.element.querySelector(".lightbox__container");
      container.innerHTML = "";

      let title = document.createElement("h2");
      let titleImage = this.titleOfImage(this.src);

      title.innerText = titleImage;

      container.appendChild(image);
      container.appendChild(title);

      image.src = src;
    }
  }

  titleOfImage(src) {
    let array = src.split("/");
    console.log(array)
    let titleImage = array[array.length - 1].replaceAll("_", " ");
    if (titleImage.endsWith(".jpg")) {
      return titleImage.replace(".jpg", " ");
    } else {
      return titleImage.replace(".mp4", " ");
    }
  }


  onKeyUp(e) {
    if (e.key === 'Escape') {
      this.close(e)
    } else if (e.key === 'ArrowLeft') {
      this.prev(e)
    } else if (e.key === 'ArrowRight') {
      this.next(e)
    } else if (e.code === 'Space') {
      this.focusVideo();
    }

  }

  close(e) {
    e.preventDefault()
    this.element.classList.add('fadeOut')
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element)
    }, 500)
    document.removeEventListener('keyup', this.onKeyUp)
  }


  next(e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image === this.src)
    if (i === this.images.length - 1) {
      i = -1
    }
    this.loadImage(this.images[i + 1])
  }


  prev(e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image === this.src)
    if (i === 0) {
      i = this.images.length
    }
    this.loadImage(this.images[i - 1])
  }

  focusVideo() {
    // eslint-disable-next-line no-unused-vars
    const video = this.element.querySelector('video').focus();
  }

  buildDOM() {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `<button class="lightbox__close">Fermer</button>
            <button class="lightbox__next">Suivant</button>
            <button class="lightbox__prev">Précédent</button>
            <div class="lightbox__container"></div>`
    dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
    dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
    dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
    return dom
  }
}

Lightbox.init()
