<template>
  <div class="home">
    <Homewheader />
    <Popularmeals />
    <Howitworks />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import Homewheader from '@/components/home/Homeheader.vue'
import Popularmeals from '@/components/home/Popularmeals.vue'
import Howitworks from '@/components/home/Howitworks.vue'

export default {
  name: 'Home',
  components : {Homewheader, Popularmeals, Howitworks}
}
</script>
