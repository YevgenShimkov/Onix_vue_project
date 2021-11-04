<template lang="pug">
.home
  <div class="home">
    <h1>HOOOOOOOOOOOOOOOOOOME</h1>
  </div>
  //- img(alt="Vue logo" src="../assets/logo.png")
  //- HelloWorld(@change='changeIndexFrom')(notification="notification")
  //- section {{notification}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      notification: 2
    }
  },
  methods: {
    changeIndexFrom(index: number, notification: number) {
      // console.log(index)
      // console.log(notification)
      this.$emit('change', index, notification)
      this.notification = index
    }
  }
})
</script>
