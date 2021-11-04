<template lang="pug">
h2.taskboard__title {{mainTitle}}
.taskborder__item(v-for='task in tasks', :key='task.id')
  .taskborder__content
    .taskboard__title.taskboard__subtitle {{task.title}}
    .taskborder__text {{ task.description }}
  .taskborder__time(:class="{'taskboard__achtung': task.additionalclass !=null}") {{ task.term }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TasksInterface } from '@/types/tasks.interface'

const tasks: TasksInterface[] = [
  {
    id: 1,
    title: 'Send reports ',
    description: 'Prepare reports for the week and send to the manager with edits ',
    term: 'yesterday',
    additionalclass: 'achtung'
  },
  {
    id: 2,
    title: 'Button',
    description: 'Correct the display of different content when clicking on the button ',
    term: '12:00 PM'
  },
  {
    id: 3,
    title: 'HTML code',
    description: 'Develop additional pages by clicking the "MORE" button ',
    term: '18:37 AM'
  }
]
export default defineComponent({
  data() {
    return {
      mainTitle: 'today tasks',
      tasks: tasks
    }
  }
})
</script>

<style lang="scss"></style>
