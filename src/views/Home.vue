<template>
  <div class="home">
    <Homewheader />
    <Popularmeals />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import Homewheader from '@/components/home/Homeheader.vue'
import Popularmeals from '@/components/home/Popularmeals.vue'

export default {
  name: 'Home',
  components : {Homewheader, Popularmeals}
}
</script>
