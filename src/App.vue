<template>
  <div>
    {{ gender }}
    <br />
    <br />
    <stage
      :head="head"
      :hair="hair"
    />
    <br />
    <br />

    <div class="options">
      <div
        v-for="option in headOptions"
        class="option"
      >
        <img
          :src="`/images/${option}.png`"
          class="option-img"
          @click="$store.commit('setHead', option)"
        />
      </div>
    </div>

    <div class="options">
      <div
        v-for="option in hairOptions"
        class="option"
      >
        <img
          :src="`/images/${option}.png`"
          class="option-img"
          @click="$store.commit('setHair', option)"
        />
      </div>
    </div>


  </div>
  
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Stage from './components/Stage.vue'

export default {
  name: 'App',
  components: {
    Stage,
  },

   computed: {
    ...mapGetters([
      'headOptions',
      'hairOptions',
    ]),
    ...mapState([
      'gender',
      'head',
      'hair',
    ]),
  },
}
</script>

<style>
body {
  font-family: Menlo;
}

img {
  display: block;
}

.options {
  display: flex;
  gap: 12px;
  width: 100%;
  overflow-x: scroll;
}

.option {
  border: 2px solid #ccc;
}

.option:hover {
  border-color: blue;
}

.option-img {
  width: 60px;
  height: 60px;
  cursor: pointer;
  
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-pixelated;
  image-rendering: pixelated;
}
</style>
