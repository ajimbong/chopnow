<template>
  <section class="bg-back p-16">
      <h1> Our Popular Meals</h1>
      <div>
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

