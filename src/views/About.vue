<template>
  <div>
    
    <Customheader :text="title" :img="imgUrl" />
    <Aboutsection />
  </div>
</template>

<script>
import Customheader from '@/components/Customheader.vue'
import Aboutsection from '@/components/about/Aboutsection.vue'

export default {
  name: 'About',
  components : {Customheader, Aboutsection},
  data(){
    return{
      imgUrl : '/pages/about/about.webp',
      title : 'About'
    }
  },
}
</script> 