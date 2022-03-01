<template>
  <section class="bg-back p-8 w-full flex flex-col items-center">
      <h1 class="text-main font-bold "> Our Popular Meals</h1>
      
          
          <Scroller>
              <Cart v-for="item in $store.getters.recommended" 
          :key="item.id"
          :name ="item.name"
          :price ="item.price"
          :details ="item.details"
          :id ="item._id"
          :image ="item.image"
          > </Cart>
          </Scroller>
    
      
  </section>
</template>

<script>
import Cart from '@/components/Cart.vue'
import Scroller from '@/components/Horisontalscroll.vue'
export default {
    name: 'Popularmeals',
    components : {Cart, Scroller}
}
</script>

<style lang="less" scoped>

</style>
