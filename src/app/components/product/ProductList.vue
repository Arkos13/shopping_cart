<template>
  <div id="products" class="box">
    <div class="products--header has-text-centered">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <div class="product-list--item"
        v-for="product in products" :key="product.id">
        <ProductListItem :product="product" />
      </div>
    </div>
    <div class="product-count has-text-right">
      <span class="has-text-weight-bold"># of products: {{products.length}}</span>
    </div>
  </div>
</template>

<script>
import ProductListItem from './ProductListItem';
export default {
  name: 'ProductList',
  computed: {
    products() {
      return this.$store.getters.products;
    }
  },
  components: {
    ProductListItem
  }
}
</script>

<style scoped>


.products--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}


</style>
