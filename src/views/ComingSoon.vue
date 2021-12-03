<template lang="pug">
h1.taskboard__title {{mainTitle}}
.taskborder__item
  .taskborder__text ...
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ComingSoon',
  data() {
    return {
      mainTitle: 'Coming Soon'
    }
  }
})
</script>
<style lang="scss" scoped>
.day {
  text-align: center;
}
</style>
