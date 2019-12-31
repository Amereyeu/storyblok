<template>
  <div>
    <TheHeader/>
    <div class="container">
      <div class="row">
        <div class="col mt-5">
          <nuxt />
        </div>
      </div>
      <TheFooter/>
    </div>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader'
  import TheFooter from '@/components/TheFooter'

  export default {
    components: {
      TheHeader,
      TheFooter
    }
  }

</script>

<style>
  body {
    font-family: 'Montserrat', sans-serif;
  }
</style>
