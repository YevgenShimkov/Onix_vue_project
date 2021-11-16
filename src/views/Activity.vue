<template lang="pug">
h2.taskboard__title {{mainTitle}}
.taskborder__item(v-for='post in posts', :key='post.id')
  .circle__big(:class='post.class')
  .taskborder__content
    .taskborder__text {{ post.name }} {{ post.text }}
    .taskborder__text.taskborder__comment(v-if='post.comment != null') {{ post.comment }}
    .taskborder__images(v-if='post.attacments != null')
      .taskborder__images_wrapper(v-for='itm in post.attacments', :key='itm.id', @click='changeContent')
        img.taskborder__img(:src='require("@/assets/img/" + itm.img)', :alt='itm.alt')
  .taskborder__time {{ post.time }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Activity',
  data() {
    return {
      mainTitle: 'today',
      posts: [
        {
          id: 1,
          class: 'circle_green',
          name: ' Darika Samak',
          text: 'mark as done Listing on Product Hunt so that we can reach as many potential users',
          time: '8:40 PM'
        },
        {
          id: 2,
          class: 'circle_yellow',
          name: 'Emilee Simchenko',
          text: 'commented on Account for teams and personal in bottom style',
          time: '7:32 PM',
          comment:
            'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes'
        },
        {
          id: 3,
          class: 'circle_blue',
          name: 'Darika Samak',
          text: 'uploaded 4 files on An option to search in current projects or in all projects',
          time: '6:02 PM',
          attacments: [
            { id: 1, img: 'road.jpeg', alt: 'road' },
            { id: 2, img: 'beach.jpeg', alt: 'beach' },
            { id: 3, img: 'winter.jpeg', alt: 'winter' },
            { id: 4, img: 'dron_beach.jpeg', alt: 'beach' }
          ]
        }
      ]
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
