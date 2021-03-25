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

  },
  methods: {
    nextImg: function () {
      this.imgIndex++;

      if (this.imgIndex == this.images.length) {
        this.imgIndex = 0;
      }
    },
  },
});
