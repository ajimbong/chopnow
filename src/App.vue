<template>
  <Customnav class="absolute top-0 left-0 w-full"/>
  <router-view/>
  <Customfooter/>

  
  
</template>

<script>
import Customfooter from '@/components/Customfooter.vue'
import Customnav from '@/components/Customnav.vue'


export default ({
  components : {Customfooter, Customnav}
})
</script>



