import { createStore } from 'vuex'
import { random } from '@/utils/random.js'

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
    'empty',
    'bg-blue',
    'bg-purple',
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
      'empty',
      'f-hair-brownfox',
      'f-hair-mohawk',
      'f-hair-slope',
    ],
    male: [
      'empty',
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

    bgIndex: 1,
    headIndex: 0,
    hairIndex: 0,

    options: optionSets,
  },
  getters: {
    bgOptions: (state) => {
      return getOptions('bg');
    },
    headOptions: (state) => {
      return getOptions('head');
    },
    hairOptions: (state) => {
      return getOptions('hair', state.gender);
    },
  },
  mutations: {
    setGender: (state, val) => {
      state.gender = val;
    },
    setBgIndex: (state, val) => {
      state.bgIndex = val;
    },
    setHeadIndex: (state, val) => {
      state.headIndex = val;
    },
    setHairIndex: (state, val) => {
      state.hairIndex = val;
    },
  },
  actions: {
    switchHead: ({ state, commit, getters}, val) => {
      commit('setHeadIndex', val);
      const headOption = getters.headOptions[val];

      const gender = headOption.startsWith('f') ? 'female' : 'male';
      commit('setGender', gender);
    },
  },
})
