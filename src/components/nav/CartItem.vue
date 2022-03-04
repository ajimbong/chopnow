<template>
  <div 
            class="
              bg-white
              h-16
              overflow-hidden
              flex
              items-center
              justify-between
              pl-3
              rounded-xl
              mt-4
              shadow-sm
            "
          >
            <div class="w-12 h-10 rounded-lg overflow-hidden">
              <img :src="image" alt="meal photo" class="h-full" />
            </div>
            <div class="">
              <p class="text-sm font-semibold">{{name}}</p>
              <p class="text-xs text-light">Price: <span>FCFA {{price}}</span></p>
              <p class="text-xs text-light">Qty: <span>1</span></p>
            </div>
            <div class="w-12 bg-form h-full flex items-center justify-center">
              <button class="text-light" @click="remove">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

</template>

<script>
export default {
    name: 'CartItem',
    props: ['name', 'price', 'image', 'id'],
    methods : {
      remove(){
        this.$store.dispatch('deleteCartItem', this.id)
      }
    }

}
</script>

<style>

</style>