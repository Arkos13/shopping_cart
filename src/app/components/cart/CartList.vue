<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p v-if="items.length === 0" class="cart-empty-text has-text-centered">
      Add some items to the cart!
    </p>
    <ul v-if="items.length > 0">
      <li v-for="cartItem in items" :key="cartItem.id" class="cart-item">
        <CartListItem :item="cartItem" />
      </li>
      <div class="cart-details">
        <p>Total Quantity:
          <span class="has-text-weight-bold">{{ quantity }}</span>
        </p>
        <p @click="removeAllCartItems"
          class="cart-remove-all--text">
          <i class="fa fa-trash"></i>Remove all
        </p>
      </div>
    </ul>
    <button :disabled="items.length === 0" class="button is-primary">
      Checkout (<span class="has-text-weight-bold">${{ total }}</span>)
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartListItem from './CartListItem';

export default {
  name: 'CartList',
  computed: {
    ...mapGetters([
      'items',
      'total',
      'quantity'
    ])
  },
  methods: {
    ...mapActions([
      'removeAllCartItems'
    ])
  },
  components: {
    CartListItem
  }
}
</script>

<style scoped>
#cart {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-empty-text {
  padding: 10px 0;
}

.cart--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.cart-item {
  padding: 10px 0;
}

.cart-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.cart-remove-all--text {
  cursor: pointer;
}

.cart-remove-all--text .fa {
  padding-right: 5px;
}
</style>
