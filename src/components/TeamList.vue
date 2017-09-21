<template>
  <div>
    <a class="btn btn-primary" @click.prevent="showNewGame">Novo jogo</a>
    <br><br>
    <input type="text" class="form-control" v-model="filter">
    <table class="table table-striped">
      <thead>
        <th v-for="column of columns">
          <a href="#" @click.prevent="sortBy(column)">{{ filters.ucwords(column) }}</a>
        </th>
      </thead>

      <tbody>
        <tr v-for="team in teamsFiltered">
          <td>
            <img :src="team.shield" style="height: 30px; width: 30px;">
            <strong>{{ team.name }}</strong>
          </td>
          <td>{{ team.points }}</td>
          <td>{{ team.goalsScored }}</td>
          <td>{{ team.goalsConceded }}</td>
          <td>{{ filters.balance(team) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import _ from 'lodash';
import Team from '../team';
import * as filters from '../filters';

export default {
  name: 'AppComponent',
  data() {
    return {
      filters,
      order: {
        keys: ['points', 'goalsScored', 'goalsConceded'],
        sort: ['desc', 'desc', 'asc']
      },
      filter: '',
      columns: ['nome', 'pontos', 'gf', 'gs', 'saldo'],
      teams: [
        new Team('América-MG', require('../assets/img/america_mg_60x60.png')),
        new Team('Atlético-MG', require('../assets/img/atletico_mg_60x60.png')),
        new Team('Atlético-PR', require('../assets/img/atletico-pr_60x60.png')),
        new Team('Botafogo', require('../assets/img/botafogo_60x60.png')),
        new Team('Chapecoense', require('../assets/img/chapecoense_60x60.png')),
        new Team('Corinthians', require('../assets/img/corinthians_60x60.png')),
        new Team('Coritiba', require('../assets/img/coritiba_60x60.png')),
        new Team('Cruzeiro', require('../assets/img/cruzeiro_60x60.png')),
        new Team('Figueirense', require('../assets/img/figueirense_60x60.png')),
        new Team('Flamengo', require('../assets/img/flamengo_60x60.png')),
        new Team('Fluminense', require('../assets/img/fluminense_60x60.png')),
        new Team('Gremio', require('../assets/img/gremio_60x60.png')),
        new Team('Internacional', require('../assets/img/internacional_60x60.png')),
        new Team('Palmeiras', require('../assets/img/palmeiras_60x60.png')),
        new Team('Ponte Preta', require('../assets/img/ponte_preta_60x60.png')),
        new Team('Santa Cruz', require('../assets/img/santa_cruz_60x60.png')),
        new Team('Santos', require('../assets/img/santos_60x60.png')),
        new Team('São Paulo', require('../assets/img/sao_paulo_60x60.png')),
        new Team('Sport', require('../assets/img/sport_60x60.png')),
        new Team('Vitória', require('../assets/img/vitoria_60x60.png'))
      ]
    };
  },
  methods: {
    showNewGame() {
      this.$parent.showView('newGame');
      this.$parent.$children[1].initNewGame(this.teams);
    },
    sortBy(column) {
      this.order.keys = column;
      this.order.sort = this.order.sort === 'desc' ? 'asc' : 'desc';
    }
  },
  computed: {
    teamsFiltered() {
      const colection = _.orderBy(this.teams, this.order.keys, this.order.sort);

      return _.filter(colection, (item) => {
        return item.name.indexOf(this.filter) >= 0;
      });
    }
  }
};
</script>
