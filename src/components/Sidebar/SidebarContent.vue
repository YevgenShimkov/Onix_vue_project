<template>
  <section class="sidebar">
    <SidebarHeader />
    <CurrentUser />
    <Tasks />
    <Menu />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CurrentUser from '@/components/User/CurrentUser.vue'
import SidebarHeader from './SidebarHeader.vue'
import Tasks from '@/components/Sidebar/Tasks.vue'
import Menu from '@/components/Sidebar/Menu.vue'
export default defineComponent({
  components: { SidebarHeader, CurrentUser, Tasks, Menu }
})
</script>

<style lang="scss">
.sidebar {
  width: 23%;
  background-color: #000;
  &__container {
    padding: 0 20px 0 30px;
  }
}
</style>
