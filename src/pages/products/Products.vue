<template>
  <div class="main-container">
    <div class="content pb-8">

      <div v-if="loading" class="flex justify-center">
        <Loader/>
      </div>

      <div v-else-if="!products.length" class="flex justify-center text-blueGray-600 text-3xl">
        Dont found any products
      </div>

      <div v-else>
        <h2 class="text-3xl text-blueGray-700 font-bold mb-6 uppercase">Products</h2>

        <div
            class="mx-auto sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-10 sm:gap-y-8 lg:px-0 mb-8">

          <div class="cart border border-gray-100 shadow-lg px-4 py-3 rounded-md relative" v-for="product in products"
               :key="product.id">
            <img :src="product.picture" alt="product-image">
            <p class="text-center font-semibold sm:text-lg text-blueGray-600 mt-3">{{ product.name }}</p>

            <div class="mt-4 flex items-center justify-between">
              <span class="font-semibold text-blueGray-400">
                ${{ product.price }}
              </span>

              <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  @click="openModal(product)"
              >
                Details
              </button>
            </div>

          </div>
        </div>

        <Pagination
            v-if="paginate.pagination.value.total > 1"
            :pagination="paginate.pagination.value"
            v-model:query="paginate.query.value"
        />
      </div>
    </div>

    <ProductDetailsModal
        :show-modal="showModal"
        :active-product="activeProduct"
        :btn-title="'Details'"
        @close="showModal = false"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useProductsStore} from "../../store/products";
import {catchErrors} from "../../utils";
import Loader from '../../components/Loader/Loader.vue'
import ProductDetailsModal from '../../components/Modals/ProductDetailsModal.vue'
import Pagination from '../../components/Pagination/Pagination.vue'
import {usePaginate} from "../../composables/usePaginate";

const productsStore = useProductsStore()

//State
const loading = ref(true)
const showModal = ref(false)
const products = ref([])
const activeProduct = ref({})


//Methods
const openModal = (product) => {
  console.log(product)
  activeProduct.value = product
  showModal.value = true
}

const fetchProducts = async () => {
  try {
    loading.value = true
    const options = {
      pagination: paginate.pagination.value,
      query: paginate.query.value,
    }

    const resp = await productsStore.fetchProducts(options)
    products.value = resp.data.data
    paginate.updatePagination(resp)
  } catch (e) {
    catchErrors(e)
  } finally {
    loading.value = false
  }
}

// Composables
const paginate = usePaginate(fetchProducts)

fetchProducts()
</script>
