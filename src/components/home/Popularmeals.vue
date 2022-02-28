<template>
  <section class="bg-back p-8 w-full flex flex-col items-center">
      <h1 class="text-main font-bold"> Our Popular Meals</h1>
      <div class="mt-8" v-if="$store.state.meals">
          <Cart name="Pepperonni"
           price=".price"
           details=".details"
           id = 10
           />
          <Cart name="Chacka"
           price="price"
           details=".details"
           id = 93
           />
      </div>
  </section>
</template>

<script>
import Cart from '@/components/Cart.vue'
export default {
    name: 'Popularmeals',
    components : {Cart}
}
</script>

