<template>
  <section class="bg-back p-8 w-full flex flex-col ">
    <h1 class="text-main font-bold text-center mb-8  "> Our Meals</h1>

    <h2 class=" text-xl font-semibold">Pizzas</h2>
    <Scroller>
              <Cart v-for="item in $store.getters.pizzas" 
          :key="item.id"
          :name ="item.name"
          :price ="item.price"
          :details ="item.details"
          :id ="item._id"
          :image ="item.image"
          > </Cart>
    </Scroller>
    
    <h2 class=" text-xl font-semibold">Burgers</h2>
    <Scroller>
              <Cart v-for="item in $store.getters.burgers" 
          :key="item.id"
          :name ="item.name"
          :price ="item.price"
          :details ="item.details"
          :id ="item._id"
          :image ="item.image"
          > </Cart>
    </Scroller>

    <h2 class=" text-xl font-semibold">Tacos</h2>
    <Scroller>
              <Cart v-for="item in $store.getters.tacos" 
          :key="item.id"
          :name ="item.name"
          :price ="item.price"
          :details ="item.details"
          :id ="item._id"
          :image ="item.image"
          > </Cart>
    </Scroller>

    <h2 class=" text-xl font-semibold">Fries</h2>
    <Scroller>
              <Cart v-for="item in $store.getters.fries" 
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
    name : 'MenuSection',
    components : {Cart, Scroller}

}
</script>

<style>

</style>