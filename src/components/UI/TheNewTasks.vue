<template lang="pug">
form(@submit.prevent)
  h4.taskboard__title.taskboard__subtitle New task
  input.input(v-model="task.title" type="text" :class="{input__noValid: !titleIsValid}" placeholder="Title" @input='checkTitleValid' @blur='checkTitleValid')
  //- span(v-show='!titleIsValid') Title
  .error__message(v-if='!titleIsValid') {{ErrorMessage.title}}
  textarea.input(v-model="task.description" type="text" :class="{input__noValid: !descriptionIsValid}" placeholder="Description" @input='checkDescrValid' @blur='checkDescrValid')
  .error__message(v-if='!descriptionIsValid') {{ErrorMessage.description}}
  input.input(v-model="task.term" type="text" :class="{input__noValid: !termIsValid}" placeholder="Deadline" @input='checkTermValid' @blur='checkTermValid')
  .error__message(v-if='!termIsValid') {{ErrorMessage.term}}
  .btn__wrapper
    main-button(@click='addTask' :disabled="!isValid") Add
    main-button(@click="$emit('closeForm')") Cancel
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainButton from '@/components/UI/MainButton.vue'
export default defineComponent({
  components: {
    MainButton
  },
  methods: {
    addTask() {
      this.task.id = Date.now()
      this.$emit('addTask', this.task)
      this.task = {
        id: 0,
        title: '',
        description: '',
        term: ''
      }
    },
    checkTitleValid() {
      if (this.task.title.length === 0) {
        this.titleIsValid = false
      } else {
        this.titleIsValid = true
      }
      this.checkIsValid()
    },
    checkDescrValid() {
      if (this.task.description.length === 0) {
        this.descriptionIsValid = false
      } else {
        this.descriptionIsValid = true
      }
      this.checkIsValid()
    },
    checkTermValid() {
      if (this.task.term.length === 0) {
        this.termIsValid = false
      } else {
        this.termIsValid = true
      }
      this.checkIsValid()
    },
    checkIsValid() {
      if (this.task.term.length !== 0 && this.task.description.length !== 0 && this.task.title.length !== 0) {
        this.isValid = true
      } else {
        this.isValid = false
      }
    }
  },
  data() {
    return {
      ErrorMessage: {
        title: 'Enter task name',
        description: 'Enter task description',
        term: 'Enter task deadline'
      },
      titleIsValid: true,
      descriptionIsValid: true,
      termIsValid: true,
      isValid: false,
      task: {
        id: 0,
        title: '',
        description: '',
        term: ''
      }
    }
  }
})
</script>

<style lang="scss" scoped>
form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}
.input {
  width: 100%;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 15px;
  &__noValid {
    border-color: #fb7373;
  }
}
.btn {
  &__wrapper {
    justify-content: space-around;
  }
}
.error__message {
  padding-left: 15px;
  font-size: 13px;
  color: #fb7373;
}
</style>
