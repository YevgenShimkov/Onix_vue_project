<template lang="pug">
header.header
  .container
    .header__wrapper
      .header__logo
        .title__main Website Redesign
        a.link.circle.circle_gray(href="#") ...
      .header__subwrapper.header__subwrapper_width
        .avatar__wrapper
          a.link(v-for="usr in users" href="#" :key="usr.id")
            img.avatar(:src="require('@/assets/img/avatar/' + usr.avatar)" :alt="usr.alt")
        a.link.circle__oval.circle__oval_grey(href="#") Share
        a.link.circle__oval.circle__oval_yellow(href="#") Chat
    ul.header__nav
      li
        router-link.header__nav_item(to="/tasks") Tasks
      li
        router-link.header__nav_item(to="/kanban") Kanban
      li
        router-link.header__nav_item(to="/activity") Activity
      li
        router-link.header__nav_item(to="/calendar") Calendar
      li
        router-link.header__nav_item(to="/files") Files
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      noActive: false,
      users: [
        { id: 1, avatar: 'avatar_3.jpeg', alt: 'avatar' },
        { id: 2, avatar: 'avatar_2.jpeg', alt: 'avatar' },
        { id: 3, avatar: 'avatar_1.jpeg', alt: 'avatar' }
      ]
    }
  },
  methods: {
    deleteClasses(classes: string) {
      const activeElement = [...document.querySelectorAll('.' + classes)]
      activeElement.forEach(itm => {
        itm.classList.remove(classes)
      })
    },
    addClasses(classes: string, el: HTMLElement) {
      el.classList.add(classes)
    },
    changeActive(evt: Event) {
      evt.stopPropagation()
      this.deleteClasses('header__nav_item_active')
      this.addClasses('header__nav_item_active', evt.target as HTMLInputElement)
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
  &__nav {
    margin: 0;
    margin-top: 20px;
    list-style: none;
    padding-left: 0;
    width: 371px;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
    &_item {
      position: relative;
      opacity: 0.7;
      font-size: 16px;
      color: #131313;
      cursor: pointer;
    }
  }
}
.router-link-exact-active {
  position: relative;
  opacity: 1;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    bottom: -15px;
    background-color: #ffc200;
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
.header__logo {
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title__main {
  font-size: 32px;
  color: #131313;
  text-transform: none;
  display: flex;
  align-items: center;
  &::before {
    display: inline-block;
    content: '';
    background-image: url('~@/assets/icons/Shapes@2x.png');
    background-size: contain;
    width: 40px;
    height: 40px;
    background-color: #febc0c;
    border-radius: 8px;
    margin-right: 15px;
  }
}
.circle {
  height: 30px;
  width: 30px;
  font-size: 25px;
  font-weight: 700;
  border-radius: 100%;
  color: #929191;
  line-height: 17px;
  &_gray {
    background: #eaeaea;
  }
}
</style>
