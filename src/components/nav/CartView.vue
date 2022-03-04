<template>
  <div class="w-full h-full bg-stone-80 absolute" @click.self="closeCart">
    <div class="bg-back white w-80 h-full opacity-100 p-4 fixed overflow-auto right-0">
      <button @click="closeCart">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L18 18M6 18L18 6L6 18Z"
            stroke="#292424"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <!-- this is the delete btn  -->
        <!--  -->
      </button>

      <div class="mt-8 flex flex-col items-center">
        <div class="w-full px-4">
           <p v-if="$store.getters.cartLength <= 0">Oops, nothing in the cart</p> 
            <cart-item v-else v-for="item in $store.state.cart" 
            :key="item._id"
            :name="item.name"
            :price="item.price"
            :image="item.image"
            :id="item.id"
            > </cart-item>

          <!-- ////////////////////////////////////////// -->
        </div>

        <div class="mt-8 w-full px-4 flex justify-between items-center border-t border-grey pt-4">
          <div>
            <p class="text-light">
              Total: <span class="text-main font-semibold">FCFA {{$store.getters.totalPrice}}</span>
            </p>
          </div>
          <div>
            <button class="bg-main text-white rounded-md px-4 py-1 text-sm"
             :disabled="!$store.loggedIn"
             @click="checkOut"
             >
              Checkout
            </button>
          </div>
        </div>
        <p v-if="!$store.loggedIn" class="text-xs mt-4 ">to checkout, you will have to <span @click="toggleLogin" class="text-main underline cursor-pointer">login here</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/nav/CartItem.vue';
export default {
  name: "CartView",
  components: {CartItem},
  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
    checkOut(){
      alert("you are logged in")
    },
    toggleLogin(){
      this.$emit('closeCart')
      this.$store.commit('setLoginMode', true)
      this.$store.commit('toggleLoginMenu')
    }
  },
};
</script>

<style>
</style>