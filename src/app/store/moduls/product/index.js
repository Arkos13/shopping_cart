import axios from 'axios';

const state = {
    products: []
};
const mutations = {
    UPDATE_PRODUCTS(state, payload) {
        state.products = payload;
    }
};
const actions = {
    getProducts(context, token) {
        axios.get(`/api/products?token=${token}`)
            .then(response => context.commit('UPDATE_PRODUCTS', response.data));
    }
};
const getters = {
    products: state => state.products,
    productItem: state => id => state.products.find(product => product.id === id)
};
export default {
    state,
    mutations,
    actions,
    getters
};