<template>
  <div class="avatar__wrapper">
    <a v-for="usr in users" href="#" class="link" :key="usr.id"
      ><img class="avatar" :src="require('@/assets/img/avatar/' + usr.avatar)" :alt="usr.alt"
    /></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    users: {
      type: Array
    }
  }
})
</script>

<style lang="scss">
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  &__wrapper {
    width: 100px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
