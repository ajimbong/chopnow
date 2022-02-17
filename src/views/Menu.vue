<template>
  <div>
    <Customheader text="Menu" :img="imgUrl" />
  </div>
</template>


<script>
import Customheader from '@/components/Customheader.vue'

export default {
  name: 'Menu',
  components : {Customheader},
  data(){
    return{
      imgUrl : '/pages/menu/menu.jpg',
      title : 'Menu'
    }
  },
}
</script>

<style scoped>
  .none{
    display:  none;
  }
  .bg-grey{
    background-color: gray;
  }
</style>