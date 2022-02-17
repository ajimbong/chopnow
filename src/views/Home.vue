<template>
  <div class="home">
    <Homewheader />
    <div>Hello World</div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import Homewheader from '@/components/home/Homeheader.vue'

export default {
  name: 'Home',
  components : {Homewheader}
}
</script>
