<template>
  <header class="h-h" id="img">
    <!-- <img src="@/assets/pages/home/homew.jpg" class="" alt=""> -->
    <div class="flex flex-col w-full h-full items-center justify-around">
      <!--  -->
      <div class="flex flex-col items-center md:p-32">
        <h1 class="text-4xl mt-12 md:mt-0 text-center font-serif lg:text-6xl">
          Best Quality And Tasty Food
        </h1>
        <p class="text-xl md:mt-8 mt-16 opacity-90" id="text">
          Delivery within an hour
        </p>
      </div>
        
      <div class="flex justify-between w-16">
        <div class="dots full" id="dotOne"></div>
        <div class="dots" id="dotTwo"></div>
        <div class="dots" id="dotThree"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.dots {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background-color: #fee2e2;
  opacity: 0.8;
}
.full {
  background-color: #ef4444;
}
.h-h {
  height: 32rem;
}

header {
  background-image: url("/pages/home/homew.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
  position: relative;
}
header::before {
  content: "";
  background-color: rgb(116, 116, 116);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  z-index: -1;
}

header > div {
  color: white;
}

button:active {
  box-shadow: none;
}

button:hover{
    background-color: rebeccapurple;
}
</style>