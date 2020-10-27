<template>
  <div class="container">
    <div class="banner">
      <h1 class="blog-name">YiBu Blog</h1>
      <h3>0000</h3>
      <p class="enter-button">
        <router-link to="/home">enter</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const enter = () => {
      console.log("enter");
    };
    return { enter };
  }
};
</script>

<style lang="scss">
.container {
  .banner {
    display: flex;
    position: fixed;
    left: 50%;
    top: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);

    .blog-name {
      margin-bottom: 10px;
    }

    .enter-button {
      margin-top: 15px;
      > a {
        display: block;
        margin: 0 8px;
        padding: 8px 24px;
        border-radius: 4px;
        background: #02bcb0;
        text-decoration: none;
        color: #fff;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>