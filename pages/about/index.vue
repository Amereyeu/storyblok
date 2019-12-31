<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-8 mx-auto mt-5">
         <h2> {{ title }} </h2>
          <p>
          {{ content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    asyncData(context) {
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

      return context.app.$storyapi.get('cdn/stories/about', {
        version: version
      }).then((res) => {
        console.log(res);
        return {
          title: res.data.story.content.title,
          content: res.data.story.content.content
        }
      }).catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
    }
  }

</script>

<style scoped lang="scss">
  p {
    white-space: pre-line;
  }
</style>
