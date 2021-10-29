<template>
  <div class="taskborder__items">
    <DashboardItem v-for="post in posts" :post="post" :key="post.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DashboardItem from '@/components/Dashboard/DashboardItem.vue'
export default defineComponent({
  components: { DashboardItem },
  props: {
    posts: {
      type: Array
    }
  }
})
</script>

<style lang="scss"></style>
