<template>
<div class="container">
  <div class="left">
    <div class="aside">
      <img src="../assets/img/Yibu.png" />
      <h1>Yibu</h1>
      <h3>智者向内寻求力量</h3>
      <div class="nav">
        <ul>
          <li>Home</li>
          <li>Archives</li>
          <li>Guestbook</li>
          <li>Links</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="middle">middle</div>
  <div class="right">right</div>
</div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.container {
  display: flex;
  min-width: 600px;
  height: 100vh;
  background-color: #f5f5fa;

  .left {
    padding: 30px 10px;
    width: 280px;

    >.aside {
      display: flex;
      flex-direction: column;
      align-items: center;

      >img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 20px;
      }

      >h1 {
        font-weight: bold;
      }

      >h3 {
        color: #6b6874;
        margin-bottom: 20px;
      }
    }
  }

  .middle {
    flex: 1;
    padding: 1rem 2rem;
    background-color: #66f;
    font-size: 2rem;
  }

  .right {
    padding: 30px 10px;
    width: 200px;
    background-color: #3c9;
  }
}

// phone
@media screen and (max-width: 760px) {
  .left {
    display: none;
  }

  .right {
    display: none;
  }
}

// iPad
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .right {
    display: none;
  }
}
</style>
