<template>
  <div>
    <Customheader :text="title" :img="imgUrl" />
    <menu-section></menu-section>
  </div>
</template>


<script>
import Customheader from '@/components/Customheader.vue'
import MenuSection from '@/components/menu/MenuSection.vue'

export default {
  name: 'Menu',
  components : {Customheader, MenuSection},
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