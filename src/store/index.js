import { createStore } from 'vuex'

const data = JSON.parse(localStorage.getItem('cauth')) || {}
const user = {
  id : '',
  token : '',
  loggedIn : false
}

if(data.id && data.token){
  user.id = data.id,
  user.token = data.token,
  user.loggedIn = true
}

export default createStore({
  state: {
    id: user.id,
    token: user.token,
    loggedIn : user.loggedIn,
    meals : [],
    cart : [],
    loginMenu : false,
    loginMode : true,
    orderView : false,
  },
  mutations: {
    login(state, data){
      if(data.id && data.token){
        state.id = data.id;
        state.token = data.token
        state.loggedIn = true;
      } else {
        alert('There was a login error')
      }
    },
    clearCart(state){
      state.cart = []
    },
    logout(state){
      state.id = '';
      state.token = '';
      state.loggedIn = false;
      window.localStorage.removeItem('cauth')
    },
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

    toggleOrderView(state){
      state.orderView = !state.orderView
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
