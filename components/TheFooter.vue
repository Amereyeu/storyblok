<template>
  <footer class="mt-5 footer">
    <div class="container">
      <div class="row text-center mt-4">
        <div class="col">
          <div class="footer__logo">
            <img src="../static/logo.svg" alt="logo">
          </div>
          <h4 class="footer__copy">&copy;2020 RockeTech</h4>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col text-center footer__social">
          <a href="#" target="_blank">
            <fa :icon="['fab', 'github']" />
          </a>
          <a href="#" target="_blank">
            <fa :icon="['fab', 'twitter']" />
          </a>
          <a href="#" target="_blank">
            <fa :icon="['fab', 'facebook']" />
          </a>
          <a href="#" target="_blank">
            <fa :icon="['fab', 'instagram']" />
          </a>
          <a href="#" target="_blank">
            <fa :icon="['fab', 'pinterest']" />
          </a>
          <a href="#" target="_blank">
            <fa :icon="['fab', 'google']" />
          </a>
        </div>
      </div>

      <div class="row text-center">
        <ul class="list-unstyled d-flex">
          <li>Images: <a href="https://www.unsplash.com" target="_blank">Unsplash</a></li>
          <li>Icons: <a href="https://www.vecteezy.com" target="_blank">Vecteezy</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>



<style scoped lang="scss">
  .footer {

    &__logo {

      img {
        width: 90px;
        margin: 0 auto;
      }
    }

    &__copy {
      font-size: 0.9em;
      color: #188188;
    }

    &__social {

      a:link,
      a:visited,
      a:active {
        color: #188188;
      }

      a:hover {
        color: #000;
      }
    }

    svg {
      margin: 10px;

      @media screen and (min-width: 481px) {
        margin: 20px;
      }
    }

    .list-unstyled {
      margin: 0 auto;

      li {
        font-size: 0.7em;
        padding: 10px;

        a:link,
        a:hover,
        a:visited,
        a:active {
          text-decoration: none;
          color: #000;
        }
      }
    }
  }

</style>
