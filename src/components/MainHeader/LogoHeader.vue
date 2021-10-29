<template>
  <div class="header__logo">
    <div class="title__main">Website Redesign</div>
    <a href="#" class="link circle circle_gray">...</a>
  </div>
</template>

<style lang="scss">
.header__logo {
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title__main {
  font-size: 32px;
  color: #131313;
  text-transform: none;
  display: flex;
  align-items: center;
  &::before {
    display: inline-block;
    content: '';
    background-image: url(../../assets/icons/Shapes@2x.png);
    background-size: contain;
    width: 40px;
    height: 40px;
    background-color: #febc0c;
    border-radius: 8px;
    margin-right: 15px;
  }
}
.circle {
  height: 30px;
  width: 30px;
  font-size: 25px;
  font-weight: 700;
  border-radius: 100%;
  color: #929191;
  line-height: 17px;

  &_gray {
    background: #eaeaea;
  }
}
</style>
