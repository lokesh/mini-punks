import { createStore } from 'vuex'
import { random } from '@/utils/random.js'

// Convenience function for mutations to reduce boilerplate
const set = key => (state, val) => {
  state[key] = val;
};

function getOptions(name, gender) {
  const set = optionSets.find(set => set.name === name);
  if (gender) {
    return set.options[gender];
  }
  return set.options;
}

function getRandomOption(name, gender) {
  const set = optionSets.find(set => set.name === name);
  const options = (gender) ? set.options[gender] : set.options;
  return random(options);
}

/*
Might need to track offsets for head shape.
Placing hats, hair in diff spots.
Or not allowing certain items on certain deads. 
 */
const optionSets = [
{
  name: 'bg',
  stackOrder: 1,
  options: [
    'blue',
    'purple',
  ],
},
{
  name: 'head',
  options: [
    'f-head-pale',
    'f-head-white',
    'f-head-brown',
    'f-head-black',
    'm-head-pale',
    'm-head-white',
    'm-head-brown',
    'm-head-black',
  ],
  stackOrder: 2,
}, 
{
  name: 'hair',
  options: {
    female: [
      'f-hair-brownfox',
      'f-hair-mohawk',
      'f-hair-slope',
    ],
    male: [
      'm-hair-brownfox',
      'm-hair-mohawk',
      'm-hair-slope',
    ],
  },
  stackOrder: 3,
}, 
];



export default createStore({
  state: {
    gender: 'female',
    head: getRandomOption('head'),
    hair: getRandomOption('hair', 'female'),

    headIndex: 0,
    hairIndex: 0,

    options: optionSets,
  },
  getters: {
     headOptions: (state) => {
      return getOptions('head');
    },
     hairOptions: (state) => {
      return getOptions('hair', state.gender);
    },

  },
  mutations: {
    setHead: (state, val) => {
      state.head = val;
      state.gender = val.startsWith('f') ? 'female' : 'male';
    },
    setHair: (state, val) => {
      state.hair = val;
    },
  },
  actions: {
  },
  modules: {
  }
})
