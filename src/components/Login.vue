<template>
  <div class="w-full h-screen bg-stone-80 fixed flex flex-col items-center justify-center" @click.self="closeSelf">
    

      <div class="bg-white w-72  rounded-lg flex flex-col items-center pb-4  px-3 md:px-5 ">
        <h2 v-if="$store.state.loginMode" class="font-bold mt-4">Login</h2>
        <h2 v-else class="font-bold mt-4">Signup</h2>
        
      <form action="" class=" flex flex-col w-full">
        <div v-if="!$store.state.loginMode" class="mt-4 md:mt-6">
          <input class="w-full rounded-md bg-form px-4 py-1" type="text" placeholder="Name">
        </div>
        <div class="mt-4 md:mt-6">
          <input class="w-full rounded-md bg-form px-4 py-1" type="email" placeholder="Email">
        </div>

        <div class="mt-4 md:mt-6">
          <input class="w-full rounded-md bg-form px-4 py-1" type="password" placeholder="password">
        </div>
        <input class="mt-6 md:mt-8 w-full rounded-lg bg-main text-white px-3 py-1 hover:shadow-md transition-shadow duration-300 ease-in" type="button" value="Submit">
      </form>

      <p v-if="$store.state.loginMode" class="text-xs text-light mt-4">Don't yet have an account ?  <span @click="toggle" class="text-main underline cursor-pointer">sign up</span></p>
      <p v-else class="text-xs text-light mt-4">Already have an account ?  <span @click="toggle" class="text-main underline cursor-pointer">login</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  data (){
      return{

          login : true
      }
  },
  methods: {
    toggle() {
      this.$store.commit('toggleLoginMode')
    },
    closeSelf() {
      this.$store.commit('toggleLoginMenu')
    },
  },
};
</script>

<style>
</style>