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

export default {
  name: 'AppComponent',
  data() {
    return {
      view: 'table'
    };
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
