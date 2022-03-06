<template>
  <div
    class="
      w-full
      h-screen
      bg-stone-80
      fixed
      flex flex-col
      items-center
      justify-center
    "
    @click.self="closeSelf"
  >
    <div
      class="
        bg-white
        w-72
        rounded-lg
        flex flex-col
        items-center
        pb-4
        px-3
        md:px-5
      "
    >
      <h2 v-if="$store.state.loginMode" class="font-bold mt-4">Login</h2>
      <h2 v-else class="font-bold mt-4">Signup</h2>

      <form action="" class="flex flex-col w-full">
        <div v-if="!$store.state.loginMode" class="mt-4 md:mt-6">
          <input
            v-model="name"
            class="w-full rounded-md bg-form px-4 py-1"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="mt-4 md:mt-6">
          <input
            v-model="email"
            class="w-full rounded-md bg-form px-4 py-1"
            type="email"
            placeholder="Email"
          />
        </div>

        <div class="mt-4 md:mt-6">
          <input
            v-model="password"
            class="w-full rounded-md bg-form px-4 py-1"
            type="password"
            placeholder="password"
          />
        </div>

        <div v-if="error" class="text-xs text-main mt-1 ml-1">{{error }}</div>
        <input
          v-if="$store.state.loginMode"
          :disabled="!loginSet"
          :class="{ 'bg-light opacity-75 cursor-not-allowed': !loginSet }"
          class="
            mt-6
            md:mt-8
            w-full
            rounded-lg
            bg-main
            text-white
            px-3
            py-1
            hover:shadow-md
            transition-shadow
            duration-300
            ease-in
          "
          type="button"
          value="Login"
          @click="login"
        />
        <input
          v-else
          :disabled="!signupSet"
          :class="{ 'bg-light opacity-75 cursor-not-allowed': !signupSet }"
          class="
            mt-6
            md:mt-8
            w-full
            rounded-lg
            bg-main
            text-white
            px-3
            py-1
            hover:shadow-md
            transition-shadow
            duration-300
            ease-in
          "
          type="button"
          value="Signup"
          @click="signup"
        />
      </form>

      <p v-if="$store.state.loginMode" class="text-xs text-light mt-4">
        Don't yet have an account ?
        <span @click="toggle" class="text-main underline cursor-pointer"
          >sign up</span
        >
      </p>
      <p v-else class="text-xs text-light mt-4">
        Already have an account ?
        <span @click="toggle" class="text-main underline cursor-pointer"
          >login</span
        >
      </p>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error : "",
    };
  },
  methods: {
    toggle() {
      this.$store.commit("toggleLoginMode");
    },
    closeSelf() {
      this.$store.commit("toggleLoginMenu");
    },
    signup() {
      //const testUrl = 'http://localhost:3000/user/signup';
      const url = "https://chopnowapi.herokuapp.com/user/signup"
      axios.post(url, {
        email : this.email,
        password : this.password,
        name : this.name
      })
      .then (response => {
        const data = response.data
        if(data.id){
          this.login()
        } else{
          alert('There was a login error')
        }
      })
      .catch (error => {
        if(error.response){
          console.error('w-err', error.response.data)
          this.error = error.response.data.error
        }else if(error.request){
          console.error('w-err', error.request)
          alert('Sorry, there was an error')
        } else{
          alert('Sorry, there was an error')
          console.error('w-err', error.message)
        }
      })
    },
    login() {
      const url = "https://chopnowapi.herokuapp.com/user/login";
      //const testUrl = 'http://localhost:3000/user/login';
      
      axios.post(url, {
        email : this.email,
        password : this.password
      })
      .then (response => {
        const data = response.data
        if(data.id && data.token){
          this.$store.commit('login', data)
          localStorage.setItem("cauth", JSON.stringify(data));
          this.closeSelf()
          alert('Login Successful')
        } else{
          alert('There was a login error')
        }
      })
      .catch (error => {
        if(error.response){
          console.error('w-err', error.response.data)
          this.error = error.response.data.error
        }else if(error.request){
          console.error('w-err', error.request)
          alert('Sorry, there was an error')
        } else{
          alert('Sorry, there was an error')
          console.error('w-err', error.message)
        }
      })
      
    },
  },
  computed: {
    loginSet() {
      if (this.email.length > 4 && this.password.length > 3) {
        return true;
      }
      return false;
    },
    signupSet() {
      if (
        this.name.length > 3 &&
        this.password.length > 3 &&
        this.email.length > 4
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>