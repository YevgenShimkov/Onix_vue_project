<template lang="pug">
h1.taskboard__title {{mainTitle}}
.taskborder__item
  .taskborder__text {{text}}
router-link.go__home(to='/') Home
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PageNotFound',
  data() {
    return {
      mainTitle: '404',
      text: 'Sorry, Page not found'
    }
  }
})
</script>
