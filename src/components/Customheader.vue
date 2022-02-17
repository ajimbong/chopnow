<template>
  <header class="h-96" :style="{ 'background-image': 'url(' + img + ')' }">
      <div class="flex flex-col w-full h-full items-center  justify-center">
          <h1 class="text-4xl font-serif lg:text-6xl">{{ text }}</h1>
      </div>
  </header>
</template>

<script>
export default {
 props : ['text', 'img']
}
</script>

<style>

</style>

<style scoped>

 header{
     /* background-image: url('/pages/about/about.jpg'); */
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