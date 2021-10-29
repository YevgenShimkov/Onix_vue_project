<template>
  <ul class="header__nav">
    <a href="#" class="link header__nav_item" @click="changeActive">Tasks</a>
    <a href="#" class="link header__nav_item" @click="changeActive">Kanban</a>
    <a href="#" class="link header__nav_item_active header__nav_item" @click="changeActive">Activity</a>
    <a href="#" class="link header__nav_item" @click="changeActive">Calendar</a>
    <a href="#" class="link header__nav_item" @click="changeActive">Files</a>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
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
      evt.preventDefault()
      this.deleteClasses('header__nav_item_active')
      this.addClasses('header__nav_item_active', evt.target as HTMLInputElement)
      console.log(evt)
    }
  }
})
</script>

<style lang="scss">
.header {
  &__nav {
    margin: 0;
    margin-top: 20px;
    list-style: none;
    padding-left: 0;
    width: 371px;
    display: flex;
    justify-content: space-between;
    &_item {
      position: relative;
      opacity: 0.7;
      font-size: 16px;
      color: #131313;
      &_active {
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
    }
  }
}
</style>
