const app = new Vue ({
  el: "#root",
  data: {
    images: [
      "img/vespucci.jpg",
      "img/swan.jpg",
      "img/tp52.jpg",
      "img/vendee_globe.jpg",
    ],
    imgIndex: 0,
    classBulletColored: "bullet_colored",
    auto: null

  },
  methods: {
    // scorrimento immagini in avanti
    nextImg: function () {
      this.imgIndex++;

      if ( this.imgIndex == this.images.length ) {
        this.imgIndex = 0;
      }
    },
    // scorrimento immagini indietro
    prevImg: function () {
      this.imgIndex--;

      if ( this.imgIndex < 0 ) {
        this.imgIndex = ( this.images.length - 1 );
      }
    },
    // corrispondenza bullets-immagini
    thatIndexThatImg: function (genericIndex) {
      this.imgIndex = genericIndex;
    },
    // stop autoplay con next
    stopAutoplayNext: function () {
      this.nextImg();
      clearInterval(this.auto);
    },
    // stop autoplay con prev
    stopAutoplayPrev: function () {
      this.prevImg();
      clearInterval(this.auto);
    },
  },
  created: function() {
    this.auto = setInterval(this.nextImg, 4000);
  },
});
