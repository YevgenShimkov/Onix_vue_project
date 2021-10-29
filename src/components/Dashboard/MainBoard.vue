<template>
  <div>
    <div class="taskborder"><Activity /></div>
    <div class="taskborder"><Tasks /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Activity from './Activity.vue'
import Tasks from '@/components/Dashboard/Tasks.vue'
export default defineComponent({
  components: { Activity, Tasks }
})
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
  &__item {
    margin-top: 30px;
    display: flex;
  }
  &__content {
    width: 551px;
    padding-left: 20px;
  }
  &__text {
    width: 461px;
    font-size: 16px;
    color: #131313;
    line-height: 20px;
  }
  &__time {
    opacity: 0.7;
    font-size: 14px;
    color: #131313;
    text-align: right;
    line-height: 20px;
  }
  &__comment {
    width: 98%;
    padding: 20px 30px;
    margin-top: 20px;
    background-color: #f7f6f3;
    border-radius: 10px;
    font-size: 15px;
  }
  &__images {
    margin-top: 20px;
    display: flex;
    &_wrapper {
      cursor: pointer;
      margin-right: 10px;
      overflow: hidden;
      width: 100px;
      height: 100px;
      border-radius: 8px;
      img {
        width: 100px;
        height: 100px;
        transition: 3s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
