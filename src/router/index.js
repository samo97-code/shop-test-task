import {createRouter, createWebHistory} from "vue-router";
import {useCookies} from "vue3-cookies";
const {cookies} = useCookies()

// layouts
import Auth from "../layouts/Auth.vue";
import User from "../layouts/User.vue";

// views for layouts
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";
import Products from "../pages/products/Products.vue";

// routes
const routes = [
    {
        path: "/",
        component: Auth,
        children: [
            {
                path: "/",
                component: Login,
                name: 'Login'
            },
            {
                path: "/register",
                component: Register,
                name: 'Register'
            },
        ],
        beforeEnter: (to, from,next) => {
            const token = cookies.get('shop_access_token')
            if (token) next({ name: 'Products' })
            else next()
        },
    },
    {
        path: "/products",
        component: User,
        name: 'User',
        children: [
            {
                path: "/products",
                component: Products,
                name: 'Products',
            },
        ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from,next) => {
    const token = cookies.get('shop_access_token')

    if (to.name === 'Register') return next()

    if (to.name !== 'Login' && !token) next({ name: 'Login' })
    else next()
})