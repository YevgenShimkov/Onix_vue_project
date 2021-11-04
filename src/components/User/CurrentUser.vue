<template lang="pug">
.user
  .sidebar__container
    .user__wrapper
      .user__subwrapper
        img(src="@/assets/img/avatar/avatar_4.jpeg" alt="avatar" class="avatar")
        .user__info
          p(class="user__name") Jean Gonzales
          p(class="user__position") Product Owner
      a(href="#" class="link link__additional") ...
</template>

<style lang="scss">
.user {
  background-color: #202020;
  padding: 16px 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__subwrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 100%;
    }
  }
  &__info {
    margin-left: 15px;
    width: 93px;
  }
  &__name {
    font-size: 14px;
    color: #fff;
  }
  &__position {
    font-size: 12px;
    color: #9b9b9b;
    font-weight: 300;
  }
}
.link__additional {
  color: #9b9b9b;
}
</style>
