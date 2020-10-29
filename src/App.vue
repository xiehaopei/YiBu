<template>
  <router-view></router-view>
</template>

<script>
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 37.5 + 'px';
  console.log(document.documentElement.style.fontSize)
export default {
  name: 'App',
  components: {},
};
</script>

<style lang="scss">
  .a{
    font-size: 1rem;
  }
</style>
