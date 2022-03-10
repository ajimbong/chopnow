<template>
  <div
    class="
      w-full
      h-screen
      bg-stone-80
      fixed
      flex flex-col
      items-center
      justify-center
    "
    v-if="$store.state.orderView"
    @click.self="closeSelf"
  >
    <div
      class="
        bg-white
        w-72
        rounded-lg
        flex flex-col
        items-center
        pb-4
        px-3
        md:px-5
      "
    >
      <h2 class="font-bold mt-4">Checkout</h2>


      <form action="" class="flex flex-col w-full">
        <div class="mt-4 md:mt-6">
          <input
            v-model="address"
            class="w-full rounded-md bg-form px-4 py-1"
            type="text"
            placeholder="Address"
          />
        </div>
        <div class="mt-4 md:mt-6">
          <input
            v-model="phone"
            class="w-full rounded-md bg-form px-4 py-1"
            type="number"
            placeholder="Phone"
          />
        </div>

        <div v-if="error" class="text-xs text-main mt-1 ml-1">{{error }}</div>
        <input
          :disabled="!orderSet"
          :class="{ 'bg-light opacity-75 cursor-not-allowed': !orderSet }"
          class="
            mt-6
            md:mt-8
            w-full
            rounded-lg
            bg-main
            text-white
            px-3
            py-1
            hover:shadow-md
            transition-shadow
            duration-300
            ease-in
          "
          type="button"
          value="Order"
          @click="order"
        />
      </form>
      <p v-if="!$store.getters.cartLength" class="text-xs mt-4 text-main">
          your cart is empty, you need to add some items first
        </p>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "Login",
  data() {
    return {
      address: "",
      phone: "",
      error : "",
    };
  },
  methods: {
    closeSelf() {
      this.$store.commit("toggleOrderView");
    },
    order() {
      // const testUrl = 'http://localhost:3000/order';
      const url = "https://chopnowapi.herokuapp.com/order"

      const data = {
          user_id : this.$store.state.id,
          details : JSON.stringify(this.$store.state.cart),
          total_cost : this.$store.getters.totalPrice,
          shipping_address : this.address,
          phone : `${this.phone}`
      }

      console.dir(data)
      console.log(this.$store.state.token)

      axios.post(url, data, {
        headers : {
          'auth-token': this.$store.state.token
        }
      })
      .then (response => {
        const data = response.data
        if(data.msg){
          this.closeSelf()
          this.$store.commit('clearCart')
          alert(data.msg)
        } else{
          alert('There was a checkout error')
        }
      })
      .catch (error => {
        if(error.response){
          console.error('w-err', error.response.data)
          this.error = error.response.data.error
        }else if(error.request){
          console.error('w-err', error.request)
          alert('Sorry, there was an error')
        } else{
          alert('Sorry, there was an error')
          console.error('w-err', error.message)
        }
      })
    },
  },
  computed: {
    orderSet() {
      if (
        this.address.length > 3 && this.phone && this.$store.getters.cartLength
    
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>