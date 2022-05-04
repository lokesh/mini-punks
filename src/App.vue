<template>
  <div>
    <stage
      :head="headOptions[headIndex]"
      :hair="hairOptions[hairIndex]"
      :bg="bgOptions[bgIndex]"
    />
    <br />
    <br />

    <div class="options">
      <div
        v-for="(option, index) in headOptions"
        class="option"
      >
        <img
          :src="`/images/${option}.png`"
          class="option-img"
          draggable="false"
          @click="$store.dispatch('switchHead', index)"
        />
      </div>
    </div>

   <input
      type="range"
      min="0"
      :max="bgOptions.length - 1"
      v-model="bgIndex"
    >
    <br />
    <input
      type="range"
      min="0"
      :max="hairOptions.length - 1"
      v-model="hairIndex"
    >

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
      'bgOptions',
      'headOptions',
      'hairOptions',
    ]),
    ...mapState([
      'gender',
      'bgIndex',
      'hairIndex',
      'headIndex',
    ]),

    bgIndex: {
      get: function() {
        return this.$store.state.bgIndex;
      },
      set: function(val) {
        this.$store.commit('setBgIndex', val);
      },
    },

    hairIndex: {
      get: function() {
        return this.$store.state.hairIndex;
      },
      set: function(val) {
        this.$store.commit('setHairIndex', val);
      },
    }
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
  width: 100%;
  overflow-x: scroll;
}

.option {
  border: 2px solid #ccc;
  margin-right: 12px;
}

.option:last-of-type {
  margin-right: 0;
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
