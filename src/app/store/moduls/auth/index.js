import axios from 'axios';

const state = {
  token: null,
}

const mutations = {
  SET_TOKEN(state, token) {
      state.token = token;
  }
}

const actions = {
  init(context) {
    const token = localStorage.getItem('token');
    context.commit('SET_TOKEN', token);
  },
  login(context) {
    return axios.post('/api/login')
        .then(response => {
            localStorage.setItem('token', response.data.token);
            context.commit('SET_TOKEN', response.data.token);
        });
  },
  logout(context) {
      return new Promise(resolve => {
          localStorage.removeItem('token');
          context.commit('SET_TOKEN', null);
          resolve();
      });
  }
}

const getters = {
    token: state => state.token
}

export default {
    state,
    mutations,
    actions,
    getters
};
