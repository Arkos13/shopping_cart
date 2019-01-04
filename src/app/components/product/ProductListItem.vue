<template>
    <div>
        <h2 class="has-text-weight-bold">
            <router-link :to="`/products/${product.id}`">{{product.title}}</router-link>
            <span class="tag is-primary is-pulled-right has-text-white" 
                @click="addCartItem(product)">
                Add to Cart
            </span>
        </h2>
        <p>{{product.description}}</p>
        <span class="has-text-primary has-text-weight-bold">
        <i class="fa fa-usd"></i> {{product.price}}
        </span>
    </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
    name: 'ProductListItem',
    props: ['product'],
    methods: mapActions(['addCartItem']),
}
</script>

<style scoped>
.tag {
  cursor: pointer;
}

.product-list--item {
  padding: 10px 0;
}
</style>


