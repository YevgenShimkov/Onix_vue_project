<template>
  <div class="user">
    <div class="sidebar__container">
      <div class="user__wrapper">
        <div class="user__subwrapper">
          <img src="@/assets/img/avatar/avatar_4.jpeg" alt="avatar" class="avatar" />
          <div class="user__info">
            <p class="user__name">Jean Gonzales</p>
            <p class="user__position">Product Owner</p>
          </div>
        </div>
        <a href="#" class="link link__additional">...</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="scss">
.user {
  background-color: #202020;
  padding: 16px 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__subwrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 100%;
    }
  }
  &__info {
    margin-left: 15px;
    width: 93px;
  }
  &__name {
    font-size: 14px;
    color: #fff;
  }
  &__position {
    font-size: 12px;
    color: #9b9b9b;
    font-weight: 300;
  }
}
.link__additional {
  color: #9b9b9b;
}
</style>
