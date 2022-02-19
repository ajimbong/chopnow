<template>
  <header class=" h-h " id="img">
      <!-- <img src="@/assets/pages/home/homew.jpg" class="" alt=""> -->
      <div class="flex flex-col w-full h-full items-center  justify-around">
<!--  -->
        <div class="flex flex-col items-center p-32">
            <h1 class="text-4xl font-serif lg:text-6xl">Best Quality And Tasty Food</h1>
            <p class="text-xl md:mt-8 mt-2 opacity-90" id="text">Delivery within an hour</p>
        </div>

      <div class="flex justify-between w-16">
          <div class="dots full" id="dotOne"></div>
          <div class="dots " id="dotTwo"></div>
          <div class="dots " id="dotThree"></div>
      </div>
      </div>
  </header>
</template>

<script>

export default ({
 
})
</script>

<style scoped>
.dots{
    width: .5rem;
    height: .5rem;
    border-radius: 100%;
    background-color: #FEE2E2;
    opacity: .8;
}
.full{
    background-color: #EF4444;
}
 .h-h{
     height: 32rem;
    
 }

 header{
     background-image: url('/pages/home/homew.webp');
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