<template>

  <nuxt-link :to="'/blog/' + id" class="">
    <article :style="{backgroundImage: 'url(' + image + ')'}">

      <div class="info">
        <h3 class="info__title">{{ title }}</h3>
        <p class="info__text">{{ text }}</p>
      </div>

    </article>
  </nuxt-link>

</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    }
  }

</script>

<style scoped lang="scss">
  a {
    text-decoration: none;
    color: black;
    float: left;
    margin: 0 0 30px;
    width: 100%;

    @media screen and (min-width: 768px) {
      width: 47%;
      margin: 0 10px 50px 0;
      min-height: 300px;

      &:first-of-type {
        width: 100%;
      }

      &:nth-child(2n) {
        margin-left: 18px;
      }
    }

    @media screen and (min-width: 1200px) {
      width: 48%;
    }
  }

  article {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 100px 20px;

    @media screen and (min-width: 768px) {
      padding: 100px 0 20px 50px;
      min-height: 300px;
    }

    .info {
      background: rgba(0, 0, 0, .8);
      padding: 20px;
      width: 100%;
      border: 3px solid white;

      @media screen and (min-width: 768px) {
        width: 90%;
      }

      &__title {
        text-transform: uppercase;
        font-size: 1.5em;
        color: white;
        font-family: 'Big Shoulders Text', cursive;
      }

      &__text {
        font-size: 1em;
        line-height: 1.6;
        color: white;
      }
    }
  }

</style>
