<template lang="pug">
h1.taskboard__title {{mainTitle}}
.taskborder__item
  .kanban__wrapper
    h2.taskboard__title.taskboard__subtitle.circle__oval.circle_green ToDo
    h2.taskboard__title.taskboard__subtitle.circle__oval.circle_yellow Doing
    h2.taskboard__title.taskboard__subtitle.circle__oval.circle_blue Done
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Kanban',
  data() {
    return {
      mainTitle: 'kanban'
    }
  }
})
</script>
<style scoped lang="scss">
.taskborder__item {
  display: inherit;
}
.kanban__wrapper {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
</style>
