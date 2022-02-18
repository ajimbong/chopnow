<template>
    <div>
      <Customheader :text="title" :img="imgUrl" />
      <Contactsection />
      <Googlemaps/>
    </div>
</template>

<script>
import Customheader from '@/components/Customheader.vue'
import Contactsection from '@/components/contact/Contactsection.vue'
import Googlemaps from '@/components/contact/Googlemaps.vue'

export default {
  name: 'Contact',
  components : {Customheader, Googlemaps, Contactsection},
  data(){
    return{
      imgUrl : '/pages/contact/contact.jpg',
      title : 'Contact'
    }
  },
}
</script> 