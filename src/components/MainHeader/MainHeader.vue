<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <LogoHeader />
        <div class="header__subwrapper header__subwrapper_width">
          <SocialHeader :users="users" />
          <a href="#" class="link circle__oval circle__oval_grey">Share</a>
          <a href="#" class="link circle__oval circle__oval_yellow"> Chat</a>
        </div>
      </div>
      <Navigation />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoHeader from '@/components/MainHeader/LogoHeader.vue'
import SocialHeader from '@/components/MainHeader/SocialHeader.vue'
import Navigation from '@/components/MainHeader/Navigation.vue'
export default defineComponent({
  components: {
    LogoHeader,
    SocialHeader,
    Navigation
  },
  data() {
    return {
      users: [
        { id: 1, avatar: 'avatar_3.jpeg', alt: 'avatar' },
        { id: 2, avatar: 'avatar_2.jpeg', alt: 'avatar' },
        { id: 3, avatar: 'avatar_1.jpeg', alt: 'avatar' }
      ]
    }
  }
})
</script>

<style lang="scss">
.header {
  padding: 39px 0 14px 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__subwrapper {
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_width {
      width: 278px;
    }
  }
}
.circle {
  &__oval {
    width: 67px;
    height: 30px;
    border-radius: 15px;
    line-height: 28px;
    &_grey {
      color: #131313;
      background: #eaeaea;
    }
    &_yellow {
      width: 81px;
      background: #fff8dd;
      color: #ffc200;
    }
  }
}
</style>
