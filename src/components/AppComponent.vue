<template>
  <div class="container">
    <div class="row">
      <h3>Campeonato Brasileiro - Série A - 2016</h3>
      <div v-show="view === 'table'">
        <TeamList/>
      </div>
      <div v-show="view === 'newGame'">
        <CreateGame/>
      </div>
    </div>
  </div>
</template>

<script>
import TeamList from './TeamList';
import CreateGame from './CreateGame';
import event from '../event';
import store from '../store';

export default {
  name: 'AppComponent',
  mounted() {
    event.$on('showTeamList', () => {
      this.view = 'table';
    });

    event.$on('showNewGame', () => {
      this.view = 'newGame';
    });
  },
  computed: {
    view() {
      return store.state.view;
    }
  },
  components: {
    TeamList, CreateGame
  },
  methods: {
    showView(view) {
      this.view = view;
    }
  },
};
</script>

<style src="../assets/sass/app.scss" lang="sass"></style>
