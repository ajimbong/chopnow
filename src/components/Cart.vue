<template>
  <div class="w-72 h-72 rounded-md bg-white shadow-md overflow-hidden">
      <div class="h-2/3 overflow-hidden flex items-center justify-center">
      <img :src="image" alt="meal image">
      </div>
      <div class="p-4">
          <div class="flex items-start justify-between">
              <h3 class="font-semibold">{{name}}</h3>
              <h3 class="font-semibold text-main">FCFA {{price}}</h3>
          </div>
          <div class="flex items-end justify-between pt-2">
              <p class="text-xs text-light w-1/2">{{details}}</p>
              <button class="bg-main-light rounded-full px-3 py-2 text-main text-xs shadow-sm
              hover:text-white hover:bg-main hover:shadow-md transition-colors duration-300 ease-in 
               " @click="addToCart">Add to cart+</button>
          </div>
      </div>
  </div>
</template>


<script>
export default {
    name : 'Cart',
    props : ['name', 'price', 'details', 'id', 'image'],
    methods : {
        addToCart(){
            let check = 0
            let item = {
                id : this.id,
                name : this.name,
                price : this.price,
                image : this.image
            }   
            this.$store.state.cart.forEach(element => {
                if(element.id == item.id){
                    check++
                }
            });
            if(!check){
                this.$store.commit('addToCart', item)
            }

            //window.alert(this.$store.getters.cartLength)
            
        }
    }
}
</script>

<style scoped>
    button:active{
        box-shadow: none;
    }
</style>