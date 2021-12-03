<template lang="pug">
.taskborder
  .taskborder__wrapper
    .container
      slot
</template>

<script>
export default {
  name: 'TaskBorderCard'
}
</script>

<style lang="scss">
.taskborder {
  padding: 30px 0 120px 0;
  background-color: #eaeaea;
  &__wrapper {
    margin: 0 auto;
    padding: 35px 0 97px 0;
    width: 730px;
    background-color: #fff;
    border-radius: 8px;
  }
  &__item {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  &__content {
    width: 551px;
    padding-left: 20px;
  }
  &__text {
    width: 461px;
    font-size: 16px;
    color: #131313;
    line-height: 20px;
  }
  &__time {
    opacity: 0.7;
    font-size: 14px;
    color: #131313;
    text-align: right;
    line-height: 20px;
    text-transform: uppercase;
    position: relative;
  }
  &__comment {
    width: 98%;
    padding: 20px 30px;
    margin-top: 20px;
    background-color: #f7f6f3;
    border-radius: 10px;
    font-size: 15px;
  }
  &__images {
    margin-top: 20px;
    display: flex;
    &_wrapper {
      cursor: pointer;
      margin-right: 10px;
      overflow: hidden;
      width: 100px;
      height: 100px;
      border-radius: 8px;
      img {
        width: 100px;
        height: 100px;
        transition: 3s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
.go__home {
  margin-top: 100px;
  display: block;
  text-decoration: none;
}
.taskboard {
  &__title {
    opacity: 0.5;
    font-size: 14px;
    color: #131313;
    text-transform: uppercase;
    font-weight: 500;
  }
  &__subtitle {
    text-transform: capitalize;
  }
  &__achtung {
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      top: 16px;
      background-color: #ff0000;
    }
  }
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
      background-image: url('~@/assets/icons/done_icon.svg');
    }
  }
  &_yellow {
    background: #fff8dd;
    &::before {
      background-image: url('~@/assets/icons/chat.svg');
    }
  }
  &_blue {
    background: #e3efff;
    &::before {
      background-image: url('~@/assets/icons/download_icon.svg');
    }
  }
}
</style>
