<template lang="pug">
button.btn
  slot
</template>

<script lang="ts">
export default {
  name: 'my-button'
}
</script>

<style scoped lang="scss">
.btn {
  width: 90px;
  height: 30px;
  background-color: #eaeaea;
  color: #131313;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-content: center;
  &:hover {
    background-color: #d8d8d8;
  }
  &__small {
    width: 20px;
    height: 15px;
  }
  &__big {
    width: 100%;
  }
}
.btn:disabled,
.btn:hover:disabled,
.btn:focus:disabled,
.btn:active:disabled {
  opacity: 0.7;
  background-color: #eaeaea;
}
</style>
