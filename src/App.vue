<template lang="pug">
layout
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/layouts/Layout.vue'
export default defineComponent({
  components: {
    Layout
  },
  data() {
    return {
      showModal: false,
      showAlert: false
    }
  }
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
}
</style>
