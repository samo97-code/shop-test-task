import {defineStore} from "pinia";
import axios from "axios";
import config from "../config"
import {useCookies} from "vue3-cookies";

const {cookies} = useCookies();
const token = cookies.get('shop_access_token')
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const useProductsStore = defineStore('products', {
    state: () => ({}),

    actions: {
        async fetchProducts(payload) {
            let url = `${config.BASE_API_URL}/products/paginate?`

            if (payload?.query) url += `${payload.query}`

            return await axios.get(url, payload)
        },
    },
})