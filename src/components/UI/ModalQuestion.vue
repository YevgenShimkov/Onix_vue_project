<template lang="pug">
.modal.modal__question
  .modal__close(@click='hideModal') x
  h2.modal__title Are you sure you want to change the number of tasks?
  .button__wrapper
    button.button(@click="changeTaskNumber") YES
    button.button(@click='hideModal') NO
</template>

<script lang="ts">
// when click OK in the modal window, change the number of closed tasks and reduce the number of open tasks //
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    hideModal() {
      this.$emit('hideModal', false)
    },
    changeTaskNumber() {
      this.hideModal()
      const completedTask: HTMLElement | null = document.querySelector('.tasks__completed')
      const openTask = document.querySelector('.tasks__open')
      if (Number(openTask?.firstElementChild?.textContent) > 0) {
        // spike for typescript
        if (
          completedTask !== null &&
          openTask !== null &&
          completedTask.firstElementChild !== null &&
          openTask.firstElementChild !== null
        ) {
          completedTask.firstElementChild.innerHTML = String(Number(completedTask.firstElementChild.textContent) + 1)
          openTask.firstElementChild.innerHTML = String(Number(openTask.firstElementChild.textContent) - 1)
        }
      }
      // edge case
      // if there are no open tasks, then the displayed modal window changes
      if (Number(openTask?.firstElementChild?.textContent) === 0) {
        this.$emit('changeMessage', true)
      }
    }
  }
})
</script>

<style lang="scss">
.button {
  background-color: #eaeaea;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #131313;
  width: 80px;
  height: 32px;
  cursor: pointer;
  &__wrapper {
    display: flex;
    justify-content: space-around;
  }
}
</style>
