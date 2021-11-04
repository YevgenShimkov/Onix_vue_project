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

<style lang="scss">
.taskboard {
  &__title {
    opacity: 0.5;
    font-size: 14px;
    color: #131313;
    text-transform: uppercase;
    font-weight: 500;
  }
  &__subtitle {
    text-transform: capitalize;
  }
  &__achtung {
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      top: 16px;
      background-color: #ff0000;
    }
  }
}
.circle {
  &__big {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: '';
      background-size: contain;
      width: 12px;
      height: 12px;
      opacity: 0.7;
    }
  }
  &_green {
    background: #cef9c6;
    &::before {
      background-image: url('~@/assets/icons/done_icon.svg');
    }
  }
  &_yellow {
    background: #fff8dd;
    &::before {
      background-image: url('~@/assets/icons/chat.svg');
    }
  }
  &_blue {
    background: #e3efff;
    &::before {
      background-image: url('~@/assets/icons/download_icon.svg');
    }
  }
}
.taskborder {
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
    text-transform: uppercase;
    position: relative;
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
