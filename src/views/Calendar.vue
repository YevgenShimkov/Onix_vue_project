<template lang="pug">
h1.taskboard__title {{mainTitle}}
.taskborder__item
  .taskborder__text monday
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Calendar',
  data() {
    return {
      mainTitle: 'Calendar'
    }
  }
})
</script>
<style lang="scss" scoped></style>
