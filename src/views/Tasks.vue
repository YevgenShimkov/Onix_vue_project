<template lang="pug">
h2.taskboard__title {{mainTitle}}
.taskborder__item(v-for='(task,i) in tasks' :key=`${"task.id"}`)
  .taskborder__content
    .taskboard__title.taskboard__subtitle {{task.title}}
    .taskborder__text {{ task.description }}
  .taskborder__time(:class="{'taskboard__achtung': task.additionalclass !=null}") {{ task.term }}
  //- main-button.btn__small(@click='deleteTask(task)') Done
  span(@click='deleteTask(i)')
the-new-tasks(v-if='showForm' @closeForm='closeForm' @addTask= 'addTask')
.btn__wrapper(v-else)
  main-button.btn__big(@click='show') Add tasks
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TasksInterface } from '@/types/tasks.interface'
import MainButton from '@/components/UI/MainButton.vue'
import TheNewTasks from '@/components/UI/TheNewTasks.vue'

const tasks: TasksInterface[] = [
  {
    id: 1,
    title: 'Send reports',
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
  name: 'Tasks',
  components: {
    MainButton,
    TheNewTasks
  },
  data() {
    return {
      mainTitle: 'today tasks',
      tasks: tasks,
      showForm: false
    }
  },
  methods: {
    show() {
      this.showForm = true
    },
    closeForm() {
      this.showForm = false
    },
    addTask(task: TasksInterface) {
      this.tasks.push(task)
      this.closeForm()
    },
    deleteTask(i: number) {
      this.tasks.splice(i, 1)
    }
  }
})
</script>

<style lang="scss">
.btn {
  &__wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }
}
span {
  cursor: pointer;
  &:after {
    display: inline-block;
    vertical-align: top;
    line-height: 1em;
    width: 1em;
    height: 1em;
    margin-right: 0.3em;
    text-align: center;
    content: '✔';
    color: #ffc200;
  }
  &:hover::before {
    content: 'Done';
    position: absolute;
    right: -15px;
    top: -10px;
    font-size: 15px;
    color: #ffc200;
  }
}
</style>
