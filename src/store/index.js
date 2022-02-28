import { createStore } from 'vuex'

export default createStore({
  state: {
    uid: '',
    loggedIn : false,
    meals : [],
    cart : []
  },
  mutations: {
    setMeals(store, data){
      store.meals = data
    },
    addToCart(state, data){
      state.cart.push(data)
    }
  },
  actions: {
    populateMeals(store){
      fetch('https://chopnowapi.herokuapp.com/meals')
      .then(res => res.json())
      .then(data => store.commit('setMeals', data))
      .catch( err => console.error(err))

      console.log(store.state.meals)
      
    }
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
    }
  },
  modules: {
  }
})
