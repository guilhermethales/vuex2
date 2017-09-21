import Vue from 'vue';
import Vuex from 'vuex';
import listTeam from './listTeam';

Vue.use(Vuex);

const state = {
  view: 'table',
  teams: listTeam
};

export default Vuex.Store({
  state
});
