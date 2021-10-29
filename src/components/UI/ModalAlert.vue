<template>
  <div class="modal modal__alert">
    <div class="modal__close" @click="addClasses">x</div>
    <h2 class="modal__title">There are no open tasks.</h2>
    <div class="button__wrapper">
      <button class="button" @click="addClasses">OK</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    addClasses() {
      const el = document.querySelector('.backdrop')
      if (el !== null) {
        el.classList.add('hidden')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.modal__alert {
  display: none;
}
</style>
