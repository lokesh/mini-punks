<template>
  <div>
    <stage
      :head="head"
    />
    <br />
    <br />
    <div class="options">
      <div
        v-for="head in heads"
        class="option"
      >
        <img
          :src="`/images/${head}.png`"
          @click="$store.commit('setHead', head)"
        />
      </div>
    </div>

  </div>
  
</template>

<script>
import { mapState } from 'vuex';
import Stage from './components/Stage.vue'

export default {
  name: 'App',
  components: {
    Stage,
  },

  data() {
    return {
      heads: [
        'female-pale',
        'female-white',
        'female-brown',
        'female-black',
        'male-pale',
        'male-white',
        'male-brown',
        'male-black',
      ],
    };
  },

   computed: {
    ...mapState([
      'head',
    ]),
  },
}
</script>

<style>
body {
  font-family: Menlo;
}

.options {
  display: flex;
  gap: 12px;
  width: 100%;
  overflow-x: scroll;
}

.option {

}

img {
  width: 120px;
  height: 120px;
  
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-pixelated;
  image-rendering: pixelated;
  box-shadow: inset 0 0 0 2px #eee;
}
</style>
