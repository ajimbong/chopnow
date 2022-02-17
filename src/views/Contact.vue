<template>
    <div>
      <Customheader text="Menu" :img="imgUrl" />
    </div>
</template>

<script>
import Customheader from '@/components/Customheader.vue'

export default {
  name: 'Contact',
  components : {Customheader},
  data(){
    return{
      imgUrl : '/pages/contact/contact.jpg',
      title : 'Contact'
    }
  },
}
</script> 