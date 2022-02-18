<template>
  <section class="bg-back p-8 w-full flex flex-col items-center">
      <h1 class="text-main font-bold"> Our Popular Meals</h1>
      <div class="mt-8">
          <Cart/>
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

