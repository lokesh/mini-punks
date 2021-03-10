<template>
  <a
    ref="download"
    href="#"
    @click="download"
  >
    Download
  </a>
  {{ head }}<br />
  <canvas
    class="canvas"
    ref="canvas"
  />
</template>

<script>
export default {
  name: 'Stage',

  props: {
    head: String,
  },

  data() {
    return {
      canvas: null,
      ctx: null,
    }
  },

  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    // console.log(this.ctx);

    // var img = new Image();
    // var img2 = new Image();
    // img.onload = () => {
    //   this.ctx.drawImage(img, 0, 0);
    // };
    // img2.onload = () => {
    //   this.ctx.drawImage(img2, 0, 0);
    // };

    // img.src = `/images/${this.head}.png`;
    // img2.src = '/images/hat-purple.png';


    // this.width = Math.min(this.el.parentElement.offsetWidth, this.maxWidth);
    // this.el.style.width = `${this.width}px`;
    // this.el.style.height = `${this.height}px`;

    // Set actual size in memory (scaled to account for extra pixel density).
    // const scale = window.devicePixelRatio;
    this.canvas.width = 24;
    this.canvas.height = 24;

    // Normalize coordinate system to use css pixels.
    // this.ctx.scale(scale, scale);

    // img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
    this.draw();
  },

  watch: {
    head() {
      this.draw();
    },
  },

  methods: {
    draw() {
      // Clear
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      var img = new Image();
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0);
      };

      img.src = `/images/${this.head}.png`;
    },  

    /*
    Code from https://codepen.io/joseluisq/pen/mnkLu
    It's messy and not tested on mobile.
     */
    download() {
      var lnk = document.createElement('a'), e;

      /// the key here is to set the download attribute of the a tag
      lnk.download = 'foo.png';

      /// convert canvas content to data-uri for link. When download
      /// attribute is set the content pointed to by link will be
      /// pushed as "download" in HTML5 capable browsers
      lnk.href = this.canvas.toDataURL("image/png;base64");

      /// create a "fake" click-event to trigger the download
      if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
                         0, 0, 0, 0, 0, false, false, false,
                         false, 0, null);

        lnk.dispatchEvent(e);
      }
    },
  },
}
</script>

<style scoped>
.canvas {
  width: 240px;
  height: 240px;
  /*-ms-interpolation-mode: nearest-neighbor;*/
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-pixelated;
  image-rendering: pixelated;
  /*border: 2px solid red;*/
}
</style>

