<template lang="pug">
.modal.modal__alert
  .modal__close(@click='hideModal') x
  h2.modal__title There are no open tasks.
  .button__wrapper
    button.button(@click='hideModal') OK
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    hideModal() {
      this.$emit('hideModal', false)
    }
  }
})
</script>

<style lang="scss" scoped></style>
