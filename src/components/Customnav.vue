<template>
  <nav
    class="
      opacity-100
      hidden
      md:flex
      absolute
      top-0
      justify-between
      px-4
      w-full
    "
  >
    <div class="">
      <!-- the logo goes here  -->
      <svg
        width="91"
        height="55"
        viewBox="0 0 91 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-16"
      >
        <g clip-path="url(#clip0_14_50)">
          <path
            d="M90.3158 27.535H60.2105V30.7037H90.3158V27.535Z"
            fill="#FEF2F2"
          />
          <path
            d="M89.1754 27.3086H73.2105C72.2028 27.3086 71.386 28.1193 71.386 29.1193C71.386 30.1194 72.2028 30.93 73.2105 30.93H89.1754C90.1831 30.93 91 30.1194 91 29.1193C91 28.1193 90.1831 27.3086 89.1754 27.3086Z"
            fill="#FEF2F2"
          />
          <path
            d="M27.1404 -8C27.1404 -8 33.5263 -3.47325 28.9649 3.31687C28.9649 3.31687 24.8596 11.9177 30.3333 18.7078C30.3333 18.7078 25.3158 11.465 31.2456 5.12757C31.2456 5.12757 38.0877 -3.92593 27.1404 -8Z"
            fill="#FEF2F2"
          />
          <path
            d="M37.6316 -0.304527C37.6316 -0.304527 32.614 5.12757 36.2632 14.1811C36.2632 14.1811 41.2807 21.4239 34.8947 25.9506C34.8947 25.9506 45.386 23.6872 38.5439 13.2757C38.5439 13.2757 33.5263 7.39095 37.6316 -0.304527Z"
            fill="#FEF2F2"
          />
          <path
            d="M22.6109 -0.304527C22.6109 -0.304527 17.1053 6.4856 22.1228 15.5391C22.1228 15.5391 26.114 20.9712 20.0109 25.9506C20.0109 25.9506 29.421 24.1399 24.4035 14.1811C24.4035 14.1811 18.0814 9.20164 22.6109 -0.304527Z"
            fill="#FEF2F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.8947 27.535H0V39.3317C0 41.3654 0.814094 43.3159 2.26319 44.754C3.71229 46.1921 5.67769 47 7.72702 47H53.3684C54.3575 47.0024 55.3372 46.8108 56.2515 46.4363C57.1657 46.0618 57.9963 45.5117 58.6957 44.8177C59.3951 44.1236 59.9494 43.2993 60.3267 42.392C60.7041 41.4847 60.8971 40.5124 60.8947 39.5309V27.535ZM43.046 44.0576H48.807C50.4157 44.0818 51.9683 43.4714 53.1238 42.3603C54.2792 41.2493 54.9431 39.7285 54.9695 38.1321V30.93C54.9695 29.7576 52.9123 29.7576 52.9123 30.93V38.1321C52.9123 40.151 51.0649 41.7942 48.807 41.7942H43.046C41.299 41.7942 41.299 44.0576 43.046 44.0576Z"
            fill="#FEF2F2"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_50">
            <rect width="91" height="55" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>

    <!-- this is for the nave links -->
    <div class="flex w-2/3 justify-between">
      <!-- links -->
      <ul class="text-white grid grid-cols-4 gap-x-4 items-center">
        <router-link class="pt-1 hover:underline" to="/">Home</router-link>
        <router-link class="pt-1 hover:underline" to="/menu">Menu</router-link>
        <router-link class="pt-1 hover:underline" to="/contact"
          >Contact</router-link
        >
        <router-link class="pt-1 hover:underline" to="/about"
          >About</router-link
        >
      </ul>

      <!-- search bar, avatar and cart -->
      <div class="flex justify-around items-center w-1/3 relative">
        <div class="relative flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute w-3 ml-2"
          >
            <path
              d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
              stroke="#d6d3d1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            class="rounded focus:outline-none px-1.5 pl-6 text-stone"
            type="text"
          />
        </div>
        <div class="w-min">
          <svg
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 cursor-pointer"
            @click="openCart"
          >
            <path
              d="M1.80001 0.599998C1.37567 0.599998 0.968699 0.768569 0.668641 1.06863C0.368583 1.36869 0.200012 1.77565 0.200012 2.2C0.200012 2.62434 0.368583 3.03131 0.668641 3.33137C0.968699 3.63143 1.37567 3.8 1.80001 3.8H3.75201L4.24001 5.7552C4.24486 5.77771 4.25019 5.80012 4.25601 5.8224L6.42881 14.5104L5.00001 15.9376C2.98401 17.9536 4.41121 21.4 7.26241 21.4H21C21.4244 21.4 21.8313 21.2314 22.1314 20.9314C22.4314 20.6313 22.6 20.2243 22.6 19.8C22.6 19.3757 22.4314 18.9687 22.1314 18.6686C21.8313 18.3686 21.4244 18.2 21 18.2H7.26241L8.86241 16.6H19.4C19.6971 16.5998 19.9882 16.517 20.2409 16.3607C20.4935 16.2044 20.6976 15.9809 20.8304 15.7152L25.6304 6.1152C25.7523 5.87132 25.8098 5.60036 25.7975 5.32801C25.7853 5.05566 25.7036 4.79096 25.5603 4.55903C25.417 4.3271 25.2168 4.13563 24.9788 4.00279C24.7407 3.86995 24.4726 3.80014 24.2 3.8H7.04801L6.55201 1.8112C6.46534 1.4652 6.26554 1.15809 5.98434 0.938647C5.70315 0.719202 5.3567 0.600008 5.00001 0.599998H1.80001ZM22.6 25.4C22.6 26.0365 22.3472 26.647 21.8971 27.097C21.447 27.5471 20.8365 27.8 20.2 27.8C19.5635 27.8 18.953 27.5471 18.503 27.097C18.0529 26.647 17.8 26.0365 17.8 25.4C17.8 24.7635 18.0529 24.153 18.503 23.7029C18.953 23.2529 19.5635 23 20.2 23C20.8365 23 21.447 23.2529 21.8971 23.7029C22.3472 24.153 22.6 24.7635 22.6 25.4ZM7.40001 27.8C8.03653 27.8 8.64698 27.5471 9.09707 27.097C9.54716 26.647 9.80001 26.0365 9.80001 25.4C9.80001 24.7635 9.54716 24.153 9.09707 23.7029C8.64698 23.2529 8.03653 23 7.40001 23C6.76349 23 6.15304 23.2529 5.70296 23.7029C5.25287 24.153 5.00001 24.7635 5.00001 25.4C5.00001 26.0365 5.25287 26.647 5.70296 27.097C6.15304 27.5471 6.76349 27.8 7.40001 27.8Z"
              fill="#FEF2F2"
            />
          </svg>
          <div
            v-if="$store.getters.cartLength"
            class="
              absolute
              top-2
              right-4
              text-white
              w-4
              h-4
              bg-main
              flex
              items-center
              justify-center
              rounded-full
            "
          >
            <span class="text-xs"> {{ $store.getters.cartLength }}</span>
          </div>
        </div>
        <div class="w-min relative men">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.8 13C25.8 16.3948 24.4514 19.6505 22.051 22.051C19.6505 24.4514 16.3948 25.8 13 25.8C9.60524 25.8 6.34951 24.4514 3.94905 22.051C1.54858 19.6505 0.200012 16.3948 0.200012 13C0.200012 9.60523 1.54858 6.3495 3.94905 3.94903C6.34951 1.54856 9.60524 0.199997 13 0.199997C16.3948 0.199997 19.6505 1.54856 22.051 3.94903C24.4514 6.3495 25.8 9.60523 25.8 13ZM16.2 8.2C16.2 9.04869 15.8629 9.86262 15.2628 10.4627C14.6626 11.0629 13.8487 11.4 13 11.4C12.1513 11.4 11.3374 11.0629 10.7373 10.4627C10.1372 9.86262 9.80001 9.04869 9.80001 8.2C9.80001 7.3513 10.1372 6.53737 10.7373 5.93725C11.3374 5.33714 12.1513 5 13 5C13.8487 5 14.6626 5.33714 15.2628 5.93725C15.8629 6.53737 16.2 7.3513 16.2 8.2ZM13 14.6C11.4682 14.5997 9.96845 15.0392 8.67908 15.8662C7.3897 16.6933 6.36488 17.8732 5.72641 19.2656C6.62669 20.313 7.74285 21.1532 8.99832 21.7288C10.2538 22.3043 11.6189 22.6015 13 22.6C14.3811 22.6015 15.7462 22.3043 17.0017 21.7288C18.2572 21.1532 19.3733 20.313 20.2736 19.2656C19.6351 17.8732 18.6103 16.6933 17.3209 15.8662C16.0316 15.0392 14.5318 14.5997 13 14.6Z"
              fill="#FEF2F2"
            />
          </svg>
          <div
            class="
              bg-back
              absolute
              right-0
              w-20
              rounded-lg
              overflow-hidden
              px-4
              py-1
              hidden
            "
          >
            <ul class="">
              <li
                v-if="$store.state.loggedIn"
                class="
                  text-light text-center
                  hover:bg-white hover:text-main
                  cursor-pointer
                "
              >
                Profile
              </li>
              <li
                v-if="$store.state.loggedIn"
                class="
                  text-light text-center
                  hover:bg-white hover:text-main
                  cursor-pointer
                "
                @click="logout"
              >
                Logout
              </li>
              <li
                v-if="!$store.state.loggedIn"
                @click="toggleLogin"
                class="
                  text-light text-center
                  hover:bg-white hover:text-main
                  cursor-pointer
                "
              >
                Login
              </li>
              <li
                v-if="!$store.state.loggedIn"
                @click="toggleSignup"
                class="
                  text-light text-center
                  hover:bg-white hover:text-main
                  cursor-pointer
                "
              >
                Signup
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <nav
    class="
      opacity-100
      box-border
      md:hidden
      flex
      absolute
      items-center
      top-0
      justify-between
      w-screen
      px-4
    "
  >
    <!-- this is for the vavigation toggle -->
    <button class="block" @click="openNav">
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 13H17M1 1H17H1ZM1 7H17H1Z"
          stroke="#FEF2F2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- The Logo -->
    <div>
      <svg
        width="91"
        height="55"
        viewBox="0 0 91 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-16"
      >
        <g clip-path="url(#clip0_14_50)">
          <path
            d="M90.3158 27.535H60.2105V30.7037H90.3158V27.535Z"
            fill="#FEF2F2"
          />
          <path
            d="M89.1754 27.3086H73.2105C72.2028 27.3086 71.386 28.1193 71.386 29.1193C71.386 30.1194 72.2028 30.93 73.2105 30.93H89.1754C90.1831 30.93 91 30.1194 91 29.1193C91 28.1193 90.1831 27.3086 89.1754 27.3086Z"
            fill="#FEF2F2"
          />
          <path
            d="M27.1404 -8C27.1404 -8 33.5263 -3.47325 28.9649 3.31687C28.9649 3.31687 24.8596 11.9177 30.3333 18.7078C30.3333 18.7078 25.3158 11.465 31.2456 5.12757C31.2456 5.12757 38.0877 -3.92593 27.1404 -8Z"
            fill="#FEF2F2"
          />
          <path
            d="M37.6316 -0.304527C37.6316 -0.304527 32.614 5.12757 36.2632 14.1811C36.2632 14.1811 41.2807 21.4239 34.8947 25.9506C34.8947 25.9506 45.386 23.6872 38.5439 13.2757C38.5439 13.2757 33.5263 7.39095 37.6316 -0.304527Z"
            fill="#FEF2F2"
          />
          <path
            d="M22.6109 -0.304527C22.6109 -0.304527 17.1053 6.4856 22.1228 15.5391C22.1228 15.5391 26.114 20.9712 20.0109 25.9506C20.0109 25.9506 29.421 24.1399 24.4035 14.1811C24.4035 14.1811 18.0814 9.20164 22.6109 -0.304527Z"
            fill="#FEF2F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.8947 27.535H0V39.3317C0 41.3654 0.814094 43.3159 2.26319 44.754C3.71229 46.1921 5.67769 47 7.72702 47H53.3684C54.3575 47.0024 55.3372 46.8108 56.2515 46.4363C57.1657 46.0618 57.9963 45.5117 58.6957 44.8177C59.3951 44.1236 59.9494 43.2993 60.3267 42.392C60.7041 41.4847 60.8971 40.5124 60.8947 39.5309V27.535ZM43.046 44.0576H48.807C50.4157 44.0818 51.9683 43.4714 53.1238 42.3603C54.2792 41.2493 54.9431 39.7285 54.9695 38.1321V30.93C54.9695 29.7576 52.9123 29.7576 52.9123 30.93V38.1321C52.9123 40.151 51.0649 41.7942 48.807 41.7942H43.046C41.299 41.7942 41.299 44.0576 43.046 44.0576Z"
            fill="#FEF2F2"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_50">
            <rect width="91" height="55" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <!-- the cart icon -->
    <div class="relative">
      <svg
        width="26"
        height="28"
        viewBox="0 0 26 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="openCart"
      >
        <path
          d="M1.80001 0.599998C1.37567 0.599998 0.968699 0.768569 0.668641 1.06863C0.368583 1.36869 0.200012 1.77565 0.200012 2.2C0.200012 2.62434 0.368583 3.03131 0.668641 3.33137C0.968699 3.63143 1.37567 3.8 1.80001 3.8H3.75201L4.24001 5.7552C4.24486 5.77771 4.25019 5.80012 4.25601 5.8224L6.42881 14.5104L5.00001 15.9376C2.98401 17.9536 4.41121 21.4 7.26241 21.4H21C21.4244 21.4 21.8313 21.2314 22.1314 20.9314C22.4314 20.6313 22.6 20.2243 22.6 19.8C22.6 19.3757 22.4314 18.9687 22.1314 18.6686C21.8313 18.3686 21.4244 18.2 21 18.2H7.26241L8.86241 16.6H19.4C19.6971 16.5998 19.9882 16.517 20.2409 16.3607C20.4935 16.2044 20.6976 15.9809 20.8304 15.7152L25.6304 6.1152C25.7523 5.87132 25.8098 5.60036 25.7975 5.32801C25.7853 5.05566 25.7036 4.79096 25.5603 4.55903C25.417 4.3271 25.2168 4.13563 24.9788 4.00279C24.7407 3.86995 24.4726 3.80014 24.2 3.8H7.04801L6.55201 1.8112C6.46534 1.4652 6.26554 1.15809 5.98434 0.938647C5.70315 0.719202 5.3567 0.600008 5.00001 0.599998H1.80001ZM22.6 25.4C22.6 26.0365 22.3472 26.647 21.8971 27.097C21.447 27.5471 20.8365 27.8 20.2 27.8C19.5635 27.8 18.953 27.5471 18.503 27.097C18.0529 26.647 17.8 26.0365 17.8 25.4C17.8 24.7635 18.0529 24.153 18.503 23.7029C18.953 23.2529 19.5635 23 20.2 23C20.8365 23 21.447 23.2529 21.8971 23.7029C22.3472 24.153 22.6 24.7635 22.6 25.4ZM7.40001 27.8C8.03653 27.8 8.64698 27.5471 9.09707 27.097C9.54716 26.647 9.80001 26.0365 9.80001 25.4C9.80001 24.7635 9.54716 24.153 9.09707 23.7029C8.64698 23.2529 8.03653 23 7.40001 23C6.76349 23 6.15304 23.2529 5.70296 23.7029C5.25287 24.153 5.00001 24.7635 5.00001 25.4C5.00001 26.0365 5.25287 26.647 5.70296 27.097C6.15304 27.5471 6.76349 27.8 7.40001 27.8Z"
          fill="#FEF2F2"
        />
      </svg>
      <div
        v-if="$store.getters.cartLength"
        class="
          absolute
          -top-0.5
          -right-0.5
          text-white
          w-4
          h-4
          bg-main
          flex
          items-center
          justify-center
          rounded-full
        "
      >
        <span class="text-xs"> {{ $store.getters.cartLength }}</span>
      </div>
    </div>
  </nav>

  <div v-show="navOpen" class="w-screen h-full bg-stone-80 absolute md:hidden">
    <div class="bg-back white w-64 h-full opacity-100 p-4">
      <button @click="openNav">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L18 18M6 18L18 6L6 18Z"
            stroke="#292424"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="flex flex-col pt-2 text-light">
        <router-link @click="openNav" class="pt-1 hover:underline" to="/"
          >Home</router-link
        >
        <router-link @click="openNav" class="pt-1 hover:underline" to="/menu"
          >Menu</router-link
        >
        <router-link @click="openNav" class="pt-1 hover:underline" to="/contact"
          >Contact</router-link
        >
        <router-link @click="openNav" class="pt-1 hover:underline" to="/about"
          >About</router-link
        >
        <details>
          <summary>Account</summary>
          <ul class=" pl-6">
             <li
                v-if="$store.state.loggedIn"
                class="
                  text-light
                  hover:bg-white hover:text-main
                  cursor-pointer
                "
              >
                Profile
              </li>
              <li
                v-if="$store.state.loggedIn"
                class="
                  text-light 
                  hover:bg-white hover:text-main
                  cursor-pointer
                "
                @click="logout"
              >
                Logout
              </li>
              <li
                v-if="!$store.state.loggedIn"
                @click="toggleLogin"
                class="
                  text-light 
                  hover:bg-white hover:text-main
                  cursor-pointer
                "
              >
                Login
              </li>
              <li
                v-if="!$store.state.loggedIn"
                @click="toggleSignup"
                class="
                  text-light
                  hover:bg-white hover:text-main
                  cursor-pointer
                "
              >
                Signup
              </li>
          </ul>
        </details>
      </div>
    </div>
  </div>

  <cart-view @close-cart="openCart" v-if="cartOpen"></cart-view>
  <check-out> </check-out>
  <login v-if="$store.state.loginMenu"></login>
</template>

<script>
import CartView from "@/components/nav/CartView.vue";
import CheckOut from "@/components/nav/Checkout.vue";
import Login from "@/components/Login.vue";
export default {
  name: "customnav",
  components: { CartView, Login, CheckOut},
  data() {
    return {
      navOpen: false,
      cartOpen: false,
    };
  },
  methods: {
    openNav() {
      this.navOpen = !this.navOpen;
    },
    openCart() {
      this.cartOpen = !this.cartOpen;
    },
    toggleSignup() {
      this.navOpen = false
      this.$store.commit("setLoginMode", false);
      this.$store.commit("toggleLoginMenu");
    },
    toggleLogin() {
      this.navOpen = false
      this.$store.commit("setLoginMode", true);
      this.$store.commit("toggleLoginMenu");
    },
    logout(){
      this.$store.commit('logout')
      alert('Successfully logged out')
    },
  },
};
</script>

<style scoped>
.bg-dark {
  background-color: gray;
}
.bg-black {
  background-color: darkgrey;
}
.bg-red {
  background-color: red;
}
.bg-blue {
  background-color: blue;
}
.text-white {
  color: white;
}
.bg-stone-80 {
  background-color: rgba(41, 37, 36, 0.8);
}
.men:hover > div {
  display: block;
}
</style>