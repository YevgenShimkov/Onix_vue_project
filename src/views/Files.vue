<template lang="pug">
h1.taskboard__title {{mainTitle}}
.taskborder__item
  .taskborder__text No files
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Files',
  data() {
    return {
      mainTitle: 'Files'
    }
  }
})
</script>
<style lang="scss" scoped>
.day {
  text-align: center;
}
</style>
