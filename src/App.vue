<template>
  <router-view></router-view>
</template>

<script>
const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
document.documentElement.style.fontSize =
  (width > height ? height : width) / 76.8 + 'px';
export default {
  name: 'App',
  components: {},
};
</script>
