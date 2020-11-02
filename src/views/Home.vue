<template>
  <div class="container">
    <div class="left">
      <div class="aside">
        <img src="../assets/img/Yibu.png" />
        <h1>Yibu</h1>
        <h3>智者向内寻求力量</h3>
        <div class="nav">
          <ul>
            <li>
              <router-link to="welcome">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-home" />
                </svg>Home
              </router-link>
            </li>
            <li>
              <router-link to="archives">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-archives" />
                </svg>Archives
              </router-link>
            </li>
            <li>
              <router-link to="guestbook">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-comment" />
                </svg>Guestbook
              </router-link>
            </li>
            <li>
              <router-link to="links">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-link" />
                </svg>Links
              </router-link>
            </li>
            <li>
              <router-link to="about">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-personal" />
                </svg>About
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="middle">
      <router-view></router-view>
    </div>
    <div class="right">
      <div class="archives right-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-time" />
        </svg>
        <font>ARCHIVES</font>
      </div>
      <div class="tags right-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tag" />
        </svg>
        <font>TAGS</font>
      </div>
      <div class="comments right-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-comments" />
        </svg>
        <font>CURRENCY COMMENTS</font>
      </div>
    </div>
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
    width: 240px;
    min-width: 220px;

    > .aside {
      display: flex;
      flex-direction: column;
      align-items: center;

      > img {
        margin-bottom: 20px;
        border-radius: 50%;
        width: 200px;
        height: 200px;
      }

      > h1 {
        font-weight: bold;
      }

      > h3 {
        margin-bottom: 20px;
        color: #6b6874;
      }

      .nav {
        > ul {
          > li {
            margin: 10px;
            font-size: 20px;

            > a {
              display: inline-block;
              padding: 4px 16px;
              text-decoration: none;
              color: #d4d4d4;

              .icon {
                margin-right: 20px;
                width: 20px;
                height: 20px;
              }
            }

            > .router-link-active {
              color: #000;
            }
          }
        }
      }
    }
  }

  .middle {
    flex: 1;
    padding: 1rem 2rem;
    height: 100vh;
    background-color: #66f;
    font-size: 2rem;
  }

  .right {
    padding: 30px 10px;
    width: 240px;

    .right-item {
      margin-bottom: 20px;

      font {
        color: #6b6874;
      }
    }
  }
}

// phone
@media screen and (max-width: 768px) {
  .left {
    display: none;
  }

  .right {
    display: none;
  }
}

// iPad
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .right {
    display: none;
  }
}
</style>
