import { createStore } from 'vuex'
import { random } from '@/utils/random.js'

// Convenience function for mutations to reduce boilerplate
const set = key => (state, val) => {
  state[key] = val;
};

const options = [{
  label: 'Heads',
  values: [
    'female-pale',
    'female-white',
    'female-brown',
    'female-black',
    'male-pale',
    'male-white',
    'male-brown',
    'male-black',
  ],
  stack: 0,
}];

export default createStore({
  state: {
    head: random(options[0].values),
  },
  mutations: {
    setHead: set('head'),
    // shuffleTiles(state) {
    //   state.tiles =  shuffle(state.tiles);
    // },
  },
  actions: {
  },
  modules: {
  }
})
