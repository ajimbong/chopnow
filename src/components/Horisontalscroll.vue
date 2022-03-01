<template>
  <div  class="mt-2 media-scroll snaps w-full " v-if="$store.state.meals">
      <slot></slot>
  </div>
</template>

<script>
export default {
     name : 'Horizontalscrol'
}
</script>

<style scoped>
    .media-scroll{
        display: grid;
        grid-auto-flow: column;
            gap: 1rem;
        /* grid-auto-columns: 50%; */
        overflow-x: auto;
        padding-bottom: 2rem;
        padding-top: 1rem;
        overscroll-behavior-inline: contain;
    }
    .snaps{
        scroll-snap-type: inline mandatory;
    }
    .snaps > *{
        scroll-snap-align: start;
    }
    .media-scroll::-webkit-scrollbar{
        width: 0px;
    }
</style>