<template>
  <div class="container ">

    <ArticlePreview v-for="post in posts" :key="post.id" :title="post.title" :image="post.imageUrl" :text="post.text" :id="post.id" />

  </div>
</template>

<script>
  import ArticlePreview from '@/components/blog/ArticlePreview';

  export default {
    components: {
      ArticlePreview
    },
    asyncData(context) {
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

      return context.app.$storyapi.get('cdn/stories', {
        version: version,
        starts_with: 'blog/'
      }).then((res) => {
        return {
          posts: res.data.stories.map(bp => {
            return {
              title: bp.content.title,
              imageUrl: bp.content.image,
              text: bp.content.text,
              id: bp.slug
            }
          })
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

<style>

</style>
