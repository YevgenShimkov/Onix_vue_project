<template lang="pug">
.taskborder
  .taskborder__wrapper
    .container
      slot
</template>

<script>
export default {
  name: 'TaskBorderCard'
}
</script>

<style lang="scss">
.taskborder {
  padding: 30px 0 120px 0;
  background-color: #eaeaea;
  &__wrapper {
    margin: 0 auto;
    padding: 35px 0 97px 0;
    width: 730px;
    background-color: #fff;
    border-radius: 8px;
  }
}
</style>
