<template>
  <div class="taskborder__wrapper">
    <div class="container">
      <h2 class="title__taskboard">today</h2>
      <DashboardList :posts="posts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DashboardList from '@/components/Dashboard/DashboardList.vue'
export default defineComponent({
  components: { DashboardList },
  data() {
    return {
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
  }
})
</script>

<style lang="scss">
.title__taskboard {
  opacity: 0.5;
  font-size: 14px;
  color: #131313;
  text-transform: uppercase;
  font-weight: 500;
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
      background-image: url(../../assets/icons/done_icon.svg);
    }
  }
  &_yellow {
    background: #fff8dd;
    &::before {
      background-image: url(../../assets/icons/chat.svg);
    }
  }
  &_blue {
    background: #e3efff;
    &::before {
      background-image: url(../../assets/icons/download_icon.svg);
    }
  }
}
</style>
