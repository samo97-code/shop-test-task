<template>
  <div class="main-container relative py-12 sm:py-20 min-h-screen-c">
    <div class="wrapper w-full sm:w-[450px] mx-auto rounded-md bg-white px-4 sm:px-6 py-4 sm:py-8 relative">
      <div class="text-4xl text-blueGray-700 font-semibold">
        Sign In
      </div>

      <div class="content mt-10">
        <div class="group mb-4">
          <label for="email"
                 class="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mb-1">Email</label>
          <div class="relative flex items-center">
            <input id="email" type="email"
                   v-model="form.email"
                   @blur="v$.email.$touch"
                   placeholder="Email..."
                   class="peer relative h-10 w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all
                   duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"/>
            <i class="fas fa-envelope absolute left-2 text-blueGray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"></i>
          </div>
          <span class="text-xs font-medium text-red-600"
                v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
        </div>

        <div class="group mb-4">
          <label for="password"
                 class="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mb-1">Password</label>
          <div class="relative flex items-center">
            <input id="password" type="password"
                   v-model="form.password"
                   @blur="v$.password.$touch"
                   placeholder="Password..."
                   class="peer relative h-10 w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all
                   duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"/>
            <i class="fas fa-lock absolute left-2 text-blueGray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"></i>
          </div>
          <span class="text-xs font-medium text-red-600"
                v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }} </span>
          <span class="text-xs font-medium text-red-600"
                v-if="form.password && v$.password.isValid.$invalid">Must contain 6  characters, at least 1 uppercase, 1 lowercase and a number </span>
        </div>

        <div class="flex justify-center">
          <button
              class="bg-blueGray-800 text-white active:bg-blueGray-600 text-md font-bold px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
              :class="{'bg-gray-300 active:bg-gray-300 cursor-not-allowed': loading}"
              :disabled="loading"
              @click="signIn"
          >
            Let's Go
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from 'vue-router'
import {useToast} from 'vue-toastification';
import {useCookies} from "vue3-cookies";
import {useVuelidate} from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'
import {catchErrors} from "../../utils";
import axios from "axios";
import {useUserStore} from "../../store";

const userStore = useUserStore()
const {cookies} = useCookies();
const toast = useToast()
const router = useRouter()


//State
const loading = ref(false)
const form = ref({
  email: '',
  password: '',
})


// ValidationRules
const rules = {
  email: {
    required,
    email: email
  },
  password: {
    required,
    isValid: function (value) {
      const length = value.length >= 6
      const containsUppercase = /[A-Z]/.test(value)
      const containsLowercase = /[a-z]/.test(value)
      const containsNumber = /[0-9]/.test(value)
      return length && containsUppercase && containsLowercase && containsNumber
    }
  },
}

const v$ = useVuelidate(rules, form)


//Methods
const signIn = async()=>{
  try{
    loading.value = true
    await v$.value.$validate();

    const resp = await userStore.login(form.value)
    await cookies.set('shop_access_token', resp.data.accessToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${resp.data.accessToken}`
    await toast.success('Successfully entered')
    await router.push('/products')
  }catch (e) {
    catchErrors(e)
  }finally {
    loading.value = false
  }
}
</script>
