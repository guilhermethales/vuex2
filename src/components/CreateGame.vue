<template>
  <div>
    <form class="form-inline">
      <div class="form-group">
        <input type="text" class="form-control" v-model="newGame.home.goals">
        <label class="control-label" v-if="newGame.home.team">
          {{ newGame.home.team.name }}
          <img :src="newGame.home.team.shield" style="height: 30px; width: 30px;">
        </label>
      </div>
      <span>X</span>
      <div class="form-group">
        <label class="control-label" v-if="newGame.outside.team">
          <img :src="newGame.outside.team.shield" style="height: 30px; width: 30px;">
          {{ newGame.outside.team.name }}
        </label>
        <input type="text" class="form-control" v-model="newGame.outside.goals">
      </div>
      <button type="button" class="btn btn-primary" @click="endGame()">Fim de jogo</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateGame',
  data() {
    return {
      newGame: {
        home: {
          team: null,
          goals: 0
        },
        outside: {
          team: null,
          goals: 0
        }
      },
    };
  },
  methods: {
    endGame() {
      const adversaryTeam = this.newGame.outside.team;
      const goalsHome = +this.newGame.home.goals;
      const goalsOutside = +this.newGame.outside.goals;
      this.newGame.home.team.endGame(adversaryTeam, goalsHome, goalsOutside);
      this.$parent.showView('table');
    },
    initNewGame(teams) {
      const indexHome = Math.floor(Math.random() * 20);
      const indexOutside = Math.floor(Math.random() * 20);
      this.newGame.home.team = teams[indexHome];
      this.newGame.home.gols = 0;
      this.newGame.outside.team = teams[indexOutside];
      this.newGame.outside.gols = 0;
    }
  }
};
</script>
