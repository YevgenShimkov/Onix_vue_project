<template lang="pug">
section.sidebar
  .header__sidebar
    .sidebar__container
      .header__wrapper
        .header__subwrapper
          h2.title__sidebar Projectus
        a.search(href='#')
  current-user
  .tasks
    .sidebar__container
      .tasks__wrapper
        .tasks__completed(@click='showModal')
          a.link.tasks__number(href='#') {{tasks.completedTask}}
          .tasks__descr Completed Tasks
        .tasks__open(@click='goTasks(tasks.openTasks)')
          a.link.tasks__number(href='#') {{tasks.openTasks}}
          .tasks__descr Open Tasks
  .menu
    .sidebar__container
      h2.title__menu menu
      ul.menu__nav
        li.menu__item
          a.link(href='#') Home
        li.menu__item
          a.link(href='#') My Tasks
        li.menu__item#notifications(data-after='')
          a.link(href='#') Notifications
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CurrentUser from '@/components/User/CurrentUser.vue'
export default defineComponent({
  name: 'Sidebar',
  components: { CurrentUser },
  props: {
    tasks: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    showModal() {
      this.$emit('showModal', true)
    },
    goTasks(numberOpenTask: number) {
      if (numberOpenTask !== 0) {
        this.$router.push('/')
      }
    }
  }
})
</script>

<style lang="scss">
.sidebar {
  width: 23%;
  background-color: #000;
  &__container {
    padding: 0 20px 0 30px;
  }
}
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
.header {
  &__sidebar {
    padding: 30px 0;
  }
}
.title__sidebar {
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  display: flex;
  &::before {
    content: url('~@/assets/icons/Logo@3x.svg');
    padding-right: 13px;
  }
}
.search {
  &::before {
    display: inline-block;
    content: '';
    background-image: url('~@/assets/icons/Search@3x.svg');
    background-size: contain;
    width: 16px;
    height: 16px;
  }
}
.tasks {
  padding: 20px 0 30px 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  &__completed {
    width: 50%;
  }
  &__open {
    width: 50%;
  }
  &__number {
    font-size: 20px;
    color: #fff;
  }
  &__descr {
    font-size: 12px;
    color: #fff;
    opacity: 0.5;
    font-weight: 300;
  }
}
</style>
