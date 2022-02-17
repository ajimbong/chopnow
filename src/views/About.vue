<template>
  <div>
    
  <Customheader text="Menu" :img="imgUrl" />
  </div>
</template>

<script>
import Customheader from '@/components/Customheader.vue'

export default {
  name: 'About',
  components : {Customheader},
  data(){
    return{
      imgUrl : '/pages/about/about.jpg',
      title : 'About'
    }
  },
}
</script> 