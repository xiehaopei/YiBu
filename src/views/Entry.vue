<template>
  <div class="entry">
    <div class="cover"></div>
    <div class="container">
      <div class="banner">
        <div class="blog-name" :class="{isFont:isFont}">YiBu</div>
        <h3 class="quote" :class="{isFont:isFont}">智者向内寻求力量</h3>
        <p class="enter-button">
          <router-link to="/home">enter</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
  setup() {
    const isFont = ref(false);
    onMounted(() => {
      const banner = document.querySelector('.banner');
      const cover = document.querySelector('.cover');
      banner.onmouseover = () => {
        cover.style.filter = 'none';
        isFont.value = true;
      };
      banner.onmouseout = () => {
        cover.style.filter = 'blur(4px)';
        isFont.value = false;
      };
    });
    return {
      isFont,
    };
  },
};
</script>

<style lang="scss">
html {
  overflow: -moz-hidden-unscrollable;
  height: 100%;
}

body {
  -ms-overflow-style: none;
  height: 100%;
  width: calc(100vw + 18px);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}

.entry {
  width: 100vw;
  overflow: hidden;
}

.cover {
  width: 5000px;
  height: 5000px;
  background: url(../assets/img/adventure.png);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  transition: all 0.5s;
  filter: blur(4px);
}

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
    transform: translateX(-50%) translateY(-50%);

    -webkit-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);

    .blog-name {
      margin-bottom: 1rem;
      font-size: 12rem;
      -webkit-text-fill-color: #fff;
    }

    .quote {
      margin-bottom: 2.5rem;
      font-size: 4rem;
      color: #fff;
    }

    .isFont {
      -webkit-text-stroke: 1px #000;
      -webkit-text-fill-color: transparent;
    }

    .enter-button {
      > a {
        display: block;
        margin: 0 0.8rem;
        padding: 0.5rem 3rem;
        border-radius: 0.5rem;
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
</style>
