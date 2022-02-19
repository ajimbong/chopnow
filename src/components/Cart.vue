<template>
  <div class="w-72 h-72 rounded-md bg-white shadow-md overflow-hidden">
      <div class="h-2/3 overflow-hidden flex items-center justify-center">
      <img src="/pages/home/h3.webp" alt="meal image">
      </div>
      <div class="p-4">
          <div class="flex items-start justify-between">
              <h3 class="font-semibold">Pepperoni Pizza</h3>
              <h3 class="font-semibold text-main">FCFA 2,000</h3>
          </div>
          <div class="flex items-end justify-between pt-2">
              <p class="text-xs text-light w-1/2">cheese, tomato, curry, powder, stake</p>
              <button class="bg-main-light rounded-full px-3 py-2 text-main text-xs shadow-sm
              hover:text-white hover:bg-main hover:shadow-md transition-colors duration-300 ease-in 
               ">Add to cart+</button>
          </div>
      </div>
  </div>
</template>


<script>
export default {
    name : 'Cart'
}
</script>

<style scoped>
    button:active{
        box-shadow: none;
    }
</style>