<template>
  <div class="taskborder__item">
    <div class="circle__big" :class="post.class"></div>
    <div class="taskborder__content">
      <div class="taskborder__text">{{ post.name }} {{ post.text }}</div>
      <div v-if="post.comment != null" class="taskborder__text taskborder__comment">
        {{ post.comment }}
      </div>
      <div v-if="post.attacments != null" class="taskborder__images">
        <Attachments v-for="itm in post.attacments" :itm="itm" :key="itm.id" />
      </div>
    </div>
    <div class="taskborder__time">{{ post.time }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Attachments from '@/components/Dashboard/Attachments.vue'
export default defineComponent({
  components: {
    Attachments
  },
  props: {
    post: {
      type: Object
    }
  }
})
</script>

<style lang="scss"></style>
