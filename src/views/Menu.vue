<template>
  <div>
    <Customheader :text="title" :img="imgUrl" />
  </div>
</template>


<script>
import Customheader from '@/components/Customheader.vue'

export default {
  name: 'Menu',
  components : {Customheader},
  data(){
    return{
      imgUrl : '/pages/menu/menu.webp',
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