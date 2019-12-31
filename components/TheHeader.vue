<template>
  <header>
    <div class="paralax"></div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">RockeTech</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav ml-auto">
          <nuxt-link to="/blog" tag="li" class="nav-item"><a class="nav-link">Blog</a></nuxt-link>
          <nuxt-link to="/about" tag="li" class="nav-item"><a class="nav-link">About</a></nuxt-link>
        </ul>
      </div>
    </nav>

    <div class="logo">
      <img src="../static/logo.svg" alt="logo">
    </div>
  </header>
</template>



<style scoped lang="scss">
  header {
    position: relative;
  }

  .paralax {
    background-image: url(/bg.jpg);
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: table;
    width: 100%;
    height: 250px;
    opacity: 0.2;

    @media screen and (min-width: 600px) {
      height: 500px;
    }
  }

  .logo {
    position: absolute;
    top: 28%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 130px;

    @media screen and (min-width: 600px) {
      top: 40%;
      width: 250px;
    }
  }

  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;

    &-brand {
      color: #188188;
    }
  }

  .nav-item.nuxt-link-active a {
    color: #188188;
  }

</style>
