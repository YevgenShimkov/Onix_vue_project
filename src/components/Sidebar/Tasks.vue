<template>
  <div class="tasks">
    <div class="sidebar__container">
      <div class="tasks__wrapper">
        <div class="tasks__completed" @click="backdrop">
          <a href="#" class="link tasks__number">372</a>
          <div class="tasks__descr">Completed Tasks</div>
        </div>
        <div class="tasks__open">
          <a href="#" class="link tasks__number">2</a>
          <div class="tasks__descr">Open Tasks</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    deleteClasses(classes: string, parent: HTMLElement) {
      parent.querySelectorAll('.' + classes).forEach(itm => {
        itm.classList.remove(classes)
      })
    },
    backdrop() {
      const parent = document.querySelector('.overlay')
      this.deleteClasses('hidden', parent as HTMLInputElement)
    }
  }
})
</script>

<style lang="scss">
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
