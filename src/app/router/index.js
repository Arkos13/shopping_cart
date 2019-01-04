import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductList from '../components/product/ProductList.vue';
import CartList from '../components/cart/CartList.vue';
import NotFound from '../components/NotFound.vue';
import ProductItem from '../components/product/ProductItem.vue';
import Login from '../components/auth/Login.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/products'
        },
        {
            path: '/login',
            component: Login,
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem('token');
                if(token && to.path === '/login') {
                    next('/products');
                } else {
                    next();
                }
            }
        },
        {
            path: '/products',
            component: ProductList
        },
        {
            path: '/products/:id',
            component: ProductItem,
            props: true,
            beforeEnter: (to, from, next) => {
                const id = to.params.id;
                if(![1,2,3,4].includes(Number(id))) {
                    next('/not-found');
                } else {
                    next();
                }
            }
        },
        {
            path: '/cart',
            component: CartList
        },
        {
            path: '/not-found',
            component: NotFound
        },
        {
            path: '*',
            beforeEnter: (to, from, next) => {
                next('/not-found');
            }
        }
    ]
});
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if(!token && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});
export default router;