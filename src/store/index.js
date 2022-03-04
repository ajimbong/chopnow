import { createStore } from 'vuex'

export default createStore({
  state: {
    uid: '',
    loggedIn : false,
    meals : [],
    cart : [],
    loginMenu : false,
    loginMode : true
  },
  mutations: {
    setMeals(store, data){
      store.meals = data
    },
    addToCart(state, data){
      state.cart.push(data)
    },
    setCartItems(state, payload){
      state.cart = payload
    },

    toggleLoginMenu(state){
      state.loginMenu = !state.loginMenu
    },
    
    toggleLoginMode(state){
      state.loginMode = !state.loginMode
    },
    setLoginMode(state, data){
      state.loginMode = data
    }
  },
  actions: {
    populateMeals(store){
      fetch('https://chopnowapi.herokuapp.com/meals')
      .then(res => res.json())
      .then(data => store.commit('setMeals', data))
      .catch( err => console.error(err))

      console.log(store.state.meals)
      
    },
    deleteCartItem(store, payload){
      const newItem = store.state.cart.filter(item => item.id !== payload)
      store.commit('setCartItems',newItem) 
    },
  },
  getters : {
    pizzas(state){
      const pizzas = state.meals.filter((item) => item.category == "pizza")
      return pizzas
    },
    burgers(state){
      const burger = state.meals.filter((item) => item.category == "burger")
      return burger
    },
    tacos(state){
      const taco = state.meals.filter((item) => item.category == "taco")
      return taco 
    },
    fries(state){
      const fries = state.meals.filter((item) => item.category == "fries")
      return fries 
    },
    recommended(state){
      const arr = [0, 2, 6, 8, 12, 15]
      const fries = state.meals.filter((item, index) => arr.includes(index))
      return fries 
    },
    cartLength(state){
      return state.cart.length
    },
    totalPrice(state){
      if(state.cart.length <= 0)
      return 0
      let prices = state.cart.map(item => item.price)
      const total = prices.reduce((tot, cur) => tot + cur)
      return total
    },
  },
  modules: {
  }
})
