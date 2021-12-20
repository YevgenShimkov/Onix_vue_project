<template lang="pug">
//-choose which modal window is displayed
section.overlay
  .backdrop
    modal-alert(v-if='showAlert' @hideModal='hideModal')
    modal-question(v-else @hideModal='hideModal' @changeTaskNumber = 'changeTaskNumber')
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalAlert from '@/modal/ModalAlert.vue'
import ModalQuestion from '@/modal/ModalQuestion.vue'
export default defineComponent({
  components: { ModalAlert, ModalQuestion },
  props: {
    showAlert: {
      type: Boolean
    }
  },
  methods: {
    hideModal() {
      this.$emit('hideModal', false)
    },
    changeTaskNumber() {
      this.$emit('changeTaskNumber')
    }
  }
})
</script>

<style lang="scss">
.overlay {
  position: absolute;
}
.hidden {
  display: none;
}
.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.56);
}
.modal {
  position: absolute;
  display: flex;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 170px;
  background: #fff;
  padding: 30px 40px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-between;
  &__close {
    color: #fff;
    position: absolute;
    top: -5px;
    right: -25px;
    font-size: 30px;
    line-height: 21px;
    cursor: pointer;
  }
  &__title {
    color: #131313;
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
  }
}
</style>
