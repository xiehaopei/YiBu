<template>
  <div class="container">
    <div class="banner">
      <h1 class="blog-name">YiBu</h1>
      <h3 class="blog-quote">智者向内寻求力量</h3>
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
body {
  width: 100%;
  height: 100%;
  background: url(../assets/img/adventure.png);
  background-position: center;
  background-size: cover;
  
  background-attachment: fixed;
  
  .container {
    .banner {
      display: flex;
      position: fixed;
      left: 50%;
      top: 50%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 70%;
      height: 70%;
      transform: translateX(-50%) translateY(-50%);

      -webkit-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      -moz-transform: translateX(-50%) translateY(-50%);
      -ms-transform: translateX(-50%) translateY(-50%);

      .blog-name {
        margin-bottom: 1rem;
        font-size: 12rem;
        color: #fff;
      }

      .blog-quote {
        margin-bottom: 2.5rem;
        font-size: 4rem;
        color: #fff;
      }

      .enter-button {
        > a {
          display: block;
          margin: 0 .8rem;
          padding: .8rem 3rem;
          border-radius: .5rem;
          background: #02bcb0;
          text-decoration: none;
          font-size: 4rem;
          color: #fff;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>