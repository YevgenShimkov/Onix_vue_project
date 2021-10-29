<template>
  <div class="taskborder__images_wrapper" @click="changeContent">
    <img class="taskborder__img" :src="require('@/assets/img/' + itm.img)" :alt="itm.alt" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    itm: {
      type: Object
    }
  },
  methods: {
    addClasses(classes: string, el: HTMLElement) {
      el.classList.add(classes)
    },
    changeContent(evt: Event) {
      const photoArray = [...document.querySelectorAll('.taskborder__img')]
      const itm = document.getElementById('notifications')
      this.addClasses('menu__item_active', itm as HTMLInputElement)
      if (itm !== null) {
        itm.setAttribute('data-after', String(photoArray.indexOf(evt.target as Element)))
      }
    }
  }
})
</script>
