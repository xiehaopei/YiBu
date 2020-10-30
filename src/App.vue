<template>
  <router-view></router-view>
</template>

<script>
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 76.8 + 'px';
  console.log(document.documentElement.style.fontSize)
export default {
  name: 'App',
  components: {},
};
</script>
