<template>
  <div class="main-container relative py-12 sm:py-20">
    <div class="wrapper w-full sm:w-[450px] mx-auto rounded-md bg-white px-4 sm:px-6 py-4 sm:py-8 relative">
      <div class="text-4xl text-blueGray-700 font-semibold">
        Sign Up
      </div>

      <div class="content mt-10">
        <div class="group mb-4">
          <label for="name"
                 class="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mb-1">Name</label>
          <div class="relative flex items-center">
            <input id="name" type="text" v-model="form.name"
                   @blur="v$.name.$touch"
                   placeholder="Name..."
                   class="peer relative h-10 w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all
                   duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"/>
            <i class="fas fa-user absolute left-2 text-blueGray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"></i>
          </div>
          <span class="text-xs font-medium text-red-600"
                v-if="v$.name.$error"> {{ v$.name.$errors[0].$message }} </span>
        </div>

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
          <label for="start_date"
                 class="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mb-1">Education
            Start Date</label>
          <div class="relative flex items-center">
            <input id="start_date" type="date"
                   v-model="form.startDate"
                   @blur="v$.startDate.$touch"
                   placeholder="Education Start Date..."
                   class="peer relative h-10 w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all
                   duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"/>
            <i class="fas fa-calendar absolute left-2 text-blueGray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"></i>
          </div>
          <span class="text-xs font-medium text-red-600"
                v-if="v$.startDate.$error"> {{ v$.startDate.$errors[0].$message }} </span>
        </div>

        <div class="group mb-4">
          <label for="end_date"
                 class="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mb-1">Education
            End Date</label>
          <div class="relative flex items-center">
            <input id="end_date" type="date"
                   v-model="form.endDate"
                   @blur="v$.endDate.$touch"
                   placeholder="Education End Date..."
                   class="peer relative h-10 w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all
                   duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"/>
            <i class="fas fa-calendar absolute left-2 text-blueGray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"></i>
          </div>
          <span class="text-xs font-medium text-red-600"
                v-if="v$.endDate.$error"> {{ v$.endDate.$errors[0].$message }} </span>
          <span class="text-xs font-medium text-red-600"
                v-if="form.endDate && v$.endDate.isGreater.$invalid"> End date must be great than Start date</span>
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

        <div class="group mb-4">
          <label for="confirm_password"
                 class="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mb-1">Confirm
            Password</label>
          <div class="relative flex items-center">
            <input id="confirm_password" type="password"
                   v-model="form.confirmPassword"
                   @blur="v$.confirmPassword.$touch"
                   placeholder="Confirm Password..."
                   class="peer relative h-10 w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all
                   duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"/>
            <i class="fas fa-lock absolute left-2 text-blueGray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"></i>
          </div>
          <span class="text-xs font-medium text-red-600"
                v-if="v$.confirmPassword.$error"> {{ v$.confirmPassword.$errors[0].$message }} </span>
          <span class="text-xs font-medium text-red-600 block"
                v-if="v$.confirmPassword && v$.confirmPassword.sameAs.$invalid"> Must be same as password </span>
          <span class="text-xs font-medium text-red-600"
                v-if="form.confirmPassword && v$.confirmPassword.isValid.$invalid">Must contain 6  characters, at least 1 uppercase, 1 lowercase and a number </span>
        </div>

        <div class="group mb-4">
          <div class="relative flex items-center gap-x-3">
            <input id="terms" v-model="form.isTermConfirmed" @blur="v$.isTermConfirmed.$touch" type="checkbox"
                   class="border-gray-300 rounded h-5 w-5 cursor-pointer"/>
            <label for="terms"
                   class="inline-block text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out">
              I agree to the
              <router-link to="/terms" class="text-primary">term and conditions</router-link>
              .
            </label>
          </div>
          <span class="text-xs font-medium text-red-600"
                v-if="v$.isTermConfirmed.$error"> Must be checked </span>
        </div>

        <div class="flex justify-center">
          <button
              class="bg-blueGray-800 text-white active:bg-blueGray-600 text-md font-bold px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
              :class="{'bg-gray-300 active:bg-gray-300 cursor-not-allowed': loading}"
              :disabled="loading"
              type="button"
              @click="signUp"
          >
            Register
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
import {required, minLength, email} from '@vuelidate/validators'
import {catchErrors} from "../../utils";
import moment from 'moment'
import {useUserStore} from "../../store";


const userStore = useUserStore()
const {cookies} = useCookies();
const toast = useToast()
const router = useRouter()

const loading = ref(false)
const form = ref({
  name: '',
  email: '',
  startDate: '',
  endDate: '',
  password: '',
  confirmPassword: '',
  isTermConfirmed: false,
})


// ValidationRules
const rules = {
  name: {
    required,
    minLength: minLength(2)
  },
  email: {
    required,
    email: email
  },
  startDate: {
    required
  },
  endDate: {
    required,
    isGreater: value => {
      return moment(value).diff(moment(form.value.startDate), "days") > 0
    }
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
  confirmPassword: {
    required,
    sameAs: value => value === form.value.password,
    isValid: function (value) {
      const length = value.length >= 6
      const containsUppercase = /[A-Z]/.test(value)
      const containsLowercase = /[a-z]/.test(value)
      const containsNumber = /[0-9]/.test(value)
      return length && containsUppercase && containsLowercase && containsNumber
    }
  },
  isTermConfirmed: {
    required,
    checked: value => value === true
  },
}

const v$ = useVuelidate(rules, form)


// Methods
const signUp = async () => {
  try {
    loading.value = true
    await v$.value.$validate();

    if (!form.value.isTermConfirmed){
      return toast.error('Please confirm terms and conditions.')
    }

    const data = {
      name: form.value.name,
      email: form.value.email,
      education_start_date: form.value.startDate,
      education_end_date: form.value.endDate,
      password: form.value.password,
      password_confirmation: form.value.confirmPassword,
      terms: form.value.isTermConfirmed,
    }

    await userStore.register(data)
    await toast.success('Successfully registered')
    await router.push('/login')
  } catch (e) {
    catchErrors(e)
  } finally {
    loading.value = false
  }
}

</script>
