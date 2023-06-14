import {defineStore} from "pinia";
import axios from "axios";
import config from "../config"
import {useCookies} from "vue3-cookies";

const {cookies} = useCookies();
const token = cookies.get('shop_access_token')
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const useUserStore = defineStore('user', {
    state: () => ({}),

    actions: {
        async login(payload) {
            return await axios.post(`${config.BASE_API_URL}/login`, payload)
        },

        async register(payload) {
            return await axios.post(`${config.BASE_API_URL}/register`, payload)
        },

        async logout(payload) {
            return await axios.post(`${config.BASE_API_URL}/logout`, payload)
        },
    },
})