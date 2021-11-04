<template lang="pug">
.modal.modal__question
  .modal__close(@click='hideModal') x
  h2(class="modal__title") Are you sure you want to change the number of tasks?
  .button__wrapper
    button(class="button" @click="changeTaskNumber") YES
    button(class="button" @click='hideModal') NO
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    hideModal() {
      this.$emit('hideModal', false)
    },
    addClasses() {
      const el = document.querySelector('.backdrop')
      if (el !== null) {
        el.classList.add('hidden')
      }
    },
    changeMessage() {
      const modalAlert: HTMLElement | null = document.querySelector('.modal__alert')
      const modalQuestion: HTMLElement | null = document.querySelector('.modal__question')
      if (modalAlert !== null && modalQuestion !== null) {
        modalAlert.style.display = 'flex'
        modalQuestion.style.display = 'none'
      }
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
      if (Number(openTask?.firstElementChild?.textContent) === 0) {
        this.$emit('changeMessage', false)
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
<!-- <template>
 // .modal.modal__question
//   .modal__close(@click="addClasses") x
//   h2(class="modal__title") Are you sure you want to change the number of tasks?
//   .button__wrapper
//     button(class="button" @click="changeTaskNumber") YES
//     button(class="button" @click="addClasses") NO -->
<!-- // </template> -->

<!-- // <script lang="ts">
// import { defineComponent } from 'vue'
// export default defineComponent({
//   methods: {
//     addClasses() {
//       const el = document.querySelector('.backdrop')
//       if (el !== null) {
//         el.classList.add('hidden')
//       }
//     },
//     changeMessage() {
//       const modalAlert: HTMLElement | null = document.querySelector('.modal__alert')
//       const modalQuestion: HTMLElement | null = document.querySelector('.modal__question')
//       console.log(modalAlert)
//       console.log(modalQuestion)

//       if (modalAlert !== null && modalQuestion !== null) {
//         modalAlert.style.display = 'flex'
//         modalQuestion.style.display = 'none'
//       }
//     },
//     changeTaskNumber() {
//       this.addClasses()
//       const completedTask: HTMLElement | null = document.querySelector('.tasks__completed')
//       const openTask = document.querySelector('.tasks__open')
//       if (Number(openTask?.firstElementChild?.textContent) > 0) {
//         // spike for typescript
//         if (
//           completedTask !== null &&
//           openTask !== null &&
//           completedTask.firstElementChild !== null &&
//           openTask.firstElementChild !== null
//         ) {
//           completedTask.firstElementChild.innerHTML = String(Number(completedTask.firstElementChild.textContent) + 1)
//           openTask.firstElementChild.innerHTML = String(Number(openTask.firstElementChild.textContent) - 1)
//         }
//       }
//       // edge case
//       if (Number(openTask?.firstElementChild?.textContent) === 0) {
//         this.changeMessage()
//       }
//     }
//   }
// })
// </script>

// <style lang="scss">
// .button {
//   background-color: #eaeaea;
//   border-radius: 5px;
//   border: none;
//   font-weight: 500;
//   font-size: 15px;
//   text-align: center;
//   text-transform: uppercase;
//   color: #131313;
//   width: 80px;
//   height: 32px;
//   cursor: pointer;
//   &__wrapper {
//     display: flex;
//     justify-content: space-around;
//   }
// </style>} -->
