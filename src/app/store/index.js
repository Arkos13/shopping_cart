import Vue from 'vue';
import Vuex from 'vuex';
import cartModule from './moduls/cart/index';
import productModule from './moduls/product';
import auth from './moduls/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cartModule,
        productModule,
        auth
    }
});