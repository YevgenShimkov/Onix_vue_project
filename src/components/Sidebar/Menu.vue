<template>
  <div class="menu">
    <div class="sidebar__container">
      <h2 class="title__menu">menu</h2>
      <ul class="menu__nav">
        <li class="menu__item">
          <a href="#" class="link">Home</a>
        </li>
        <li class="menu__item"><a href="#" class="link">My Tasks</a></li>
        <li class="menu__item" id="notifications" data-after=""><a href="#" class="link">Notifications</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="scss">
.menu {
  &__nav {
    padding-left: 0;
    margin-top: 20px;
    list-style: none;
    line-height: 30px;
  }
  &__item {
    font-weight: 500;
    display: flex;
    align-items: center;
    a {
      color: #fff;
      font-size: 14px;
    }
    &_active::after {
      width: 20px;
      height: 19px;
      content: attr(data-after);
      background-color: #ffc200;
      border-radius: 50%;
      margin-left: 9px;
      color: #131313;
      font-size: 13px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.title {
  &__menu {
    text-transform: uppercase;
    font-size: 12px;
    color: #878787;
    line-height: 18px;
  }
}
</style>
