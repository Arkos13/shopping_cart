<template>
  <div id="app">
    <div class="navigation-buttons">
      <div v-if="shouldShowNavigation" class="navigation-buttons">
        <button @click="logout" class="button is-text is-pulled-left">Logout</button>
        <div class="is-pulled-right">
          <router-link to="/products" class="button">
            <i class="fa fa-user-circle"></i><span>Shop</span>
          </router-link>
          <router-link to="/cart" class="button is-primary">
            <i class="fa fa-shopping-cart"></i><span>{{ quantity }}</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-6 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapGetters(['token', 'quantity']),
    shouldShowNavigation() {
      return this.$route.path !== '/login';
    }
  },
  created() {
    this.$store.dispatch('init');
    if (this.token) {
      this.$store.dispatch('getCartItems', this.token);
      this.$store.dispatch('getProducts', this.token);
    }
  },
  watch: {
    token() {
      if (this.$store.getters.token) {
        this.$store.dispatch('getCartItems', this.token);
        this.$store.dispatch('getProducts', this.token);
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => this.$router.push('login'));
    }
  },
};
</script>

<style>
html, body {
  height: 100%;
  background: #F2F6FA;
}

#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
}

.column--align-center {
  margin: 0 auto;
}

.navigation-buttons {
  position: absolute;
  top: 5px;
  width: 99%;
  z-index: 99;
}

.navigation-buttons .button .fa {
  padding-right: 5px;
}
</style>
