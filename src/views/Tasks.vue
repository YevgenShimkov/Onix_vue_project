<template lang="pug">
h2.taskboard__title {{mainTitle}}
.taskborder__item(:ref='setItemRef' v-for='(task,i) in tasks' :key='`${task.id}`')
  .taskborder__content
    .taskboard__title.taskboard__subtitle {{task.title}}
    .taskborder__text {{ task.description }}
    //- .taskborder__text(:ref='setItemRef') {{ task.description }}
  .taskborder__time(:class="{'taskboard__achtung': task.additionalclass !=null}") {{ task.term }}
  //- main-button.btn__small(@click='deleteTask(task)') Done
  span(@click='deleteTask(i)')
new-tasks(v-if='showForm' @closeForm='closeForm' @addTask= 'addTask')
.btn__wrapper(v-else)
  base-button.btn__big(@click='show') Add tasks
</template>

<script lang="ts">
import { defineComponent, onBeforeUpdate, onMounted, onUpdated } from 'vue'
import { TasksInterface } from '@/types/tasks.interface'
import BaseButton from '@/components/UI/BaseButton.vue'
import NewTasks from '@/components/UI/NewTasks.vue'

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
    BaseButton,
    NewTasks
  },
  data() {
    return {
      mainTitle: 'today tasks',
      tasks: [] as TasksInterface[],
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
  },
  created() {
    this.tasks = tasks
  },
  // watch: {
  //   tasks: {
  //     deep: true,
  //     handler() {
  //       // console.log(tasks.length)
  //     }
  //   }
  // },
  setup() {
    let numberOfTasks = 0
    let itemRefs: HTMLElement[] = []
    const setItemRef = (el: HTMLElement) => {
      if (el) {
        itemRefs.push(el)
      }
    }
    onMounted(() => {
      numberOfTasks = tasks.length
      itemRefs.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animated__text')
        }, index * 500)
      })
    })
    onBeforeUpdate(() => {
      itemRefs = []
    })
    onUpdated(() => {
      if ((numberOfTasks === 0 && tasks.length > 0) || numberOfTasks > tasks.length) {
        numberOfTasks = tasks.length
      }
      if (numberOfTasks < tasks.length) {
        numberOfTasks = tasks.length
        itemRefs[itemRefs.length - 1].classList.add('animated__text2')
      }
      console.log(itemRefs)
    })
    return {
      setItemRef
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
@keyframes example {
  0% {
    font-size: 100%;
  }
  50% {
    font-size: 105%;
  }
  100% {
    font-size: 100%;
  }
}
.animated__text {
  animation-name: example;
  animation-duration: 2s;
}
@keyframes example2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.animated__text2 {
  animation-name: example2;
  animation-duration: 3s;
}
</style>
