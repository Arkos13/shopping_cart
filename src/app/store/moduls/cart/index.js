import axios from 'axios';

const state = {
    items: []
};
const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.items = payload;
    }
};
const actions = {
    getCartItems(context, token) {
        return axios.get(`/api/cart?token=${token}`)
        .then(response => context.commit('UPDATE_CART_ITEMS', response.data));
    },
    addCartItem(context, item) {
        axios.post('/api/cart', item)
        .then(response => context.commit('UPDATE_CART_ITEMS', response.data));
    },
    removeCartItem(context, item) {
        axios.post('/api/cart/delete', item)
        .then(response => context.commit('UPDATE_CART_ITEMS', response.data));
    },
    removeAllCartItems(context) {
        axios.post('/api/cart/delete/all')
        .then(response => context.commit('UPDATE_CART_ITEMS', response.data));
    }
};
const getters = {
    items: state => state.items,
    total: state => state.items.reduce((total, item) => (item.quantity * item.price) + total, 0).toFixed(2),
    quantity: state => state.items.reduce((total, item) => item.quantity + total, 0)
    
};
export default {
    state,
    mutations,
    actions,
    getters
};