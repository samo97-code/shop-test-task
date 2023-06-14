<template>
  <div class="sticky top-0 h-[60px] w-full bg-[#676b70] flex items-center z-[1]">
    <div class="main-container flex items-center justify-between">
      <img src="https://img.freepik.com/free-vector/yellow-black-briday-shopping-sale_1017-21800.jpg?w=740&t=st=1686737502~exp=1686738102~hmac=29112c328ce8dadf7d4cb4662052c87df7d066c99fef415a669a90b051a7c1c2" alt="logo" class="w-[40px] h-[40px]">

      <div class="flex gap-x-4">
        <span class="text-white font-semibold">Hello Dear User</span>

        <span class="text-white font-semibold cursor-pointer" @click="logout">Logout</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useUserStore} from "../../store";
import {catchErrors} from "../../utils";
import {useCookies} from "vue3-cookies";
import {useToast} from "vue-toastification";
import {useRouter} from "vue-router";
import axios from "axios";

const userStore = useUserStore()
const {cookies} = useCookies();
const toast = useToast()
const router = useRouter()

const logout = async()=>{
  try{
    await userStore.logout()
    cookies.remove('shop_access_token')
    delete axios.defaults.headers.common['Authorization'];
    await toast.success("See you later!");
    await router.push('/')
  }catch (e) {
    catchErrors(e)
  }
}
</script>


