<template>
  <header class=" h-h ">
      <!-- <img src="@/assets/pages/home/homew.jpg" class="" alt=""> -->
      <div class="flex flex-col w-full h-full items-center  justify-center">
<!--  -->
      <h1 class="text-4xl font-serif lg:text-6xl">Best Quality And Tasty Food</h1>
      <p class="text-xl md:mt-8 mt-2 opacity-90">Delivery within an hour</p>
      </div>
  </header>
</template>

<script>

export default ({
 
})
</script>

<style scoped>
 .h-h{
     height: 32rem;
    
 }

 header{
     background-image: url('../../assets/pages/home/homew.jpg');
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     z-index: -2;
     position: relative;
      
 }
 header::before{
     content: '';
     background-color: rgb(116, 116, 116);
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     mix-blend-mode: multiply;
     z-index: -1;
 }

 header > div{
     color: white;
 }
 
</style>