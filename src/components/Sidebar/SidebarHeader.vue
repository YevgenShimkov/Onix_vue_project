<template>
  <div class="header__sidebar">
    <div class="sidebar__container">
      <div class="header__wrapper">
        <div class="header__subwrapper">
          <h2 class="title__sidebar">Projectus</h2>
        </div>
        <a href="#" class="search"></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="scss">
.header {
  &__sidebar {
    padding: 30px 0;
  }
}

.title__sidebar {
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  display: flex;
  &::before {
    content: url(../../assets/icons/Logo@3x.svg);
    padding-right: 13px;
  }
}

.search {
  &::before {
    display: inline-block;
    content: '';
    background-image: url(../../assets/icons/Search@3x.svg);
    background-size: contain;
    width: 16px;
    height: 16px;
  }
}
</style>
