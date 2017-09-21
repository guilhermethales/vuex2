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
import * as filters from '../filters';
import event from '../event';
import store from '../store';

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
    };
  },
  methods: {
    showNewGame() {
      event.$emit('showNewGame');
      event.$emit('getTeams', this.teams);
    },
    sortBy(column) {
      this.order.keys = column;
      this.order.sort = this.order.sort === 'desc' ? 'asc' : 'desc';
    }
  },
  computed: {
    teams() {
      return store.state.teams;
    },
    teamsFiltered() {
      const colection = _.orderBy(this.teams, this.order.keys, this.order.sort);

      return _.filter(colection, (item) => {
        return item.name.indexOf(this.filter) >= 0;
      });
    }
  }
};
</script>
