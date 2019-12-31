<template>
  <section v-editable="blok">
    <div class="container">
      <div class="row">
        <div class="col-11 mx-auto mt-5">
          <div class="bg_image" :style="{backgroundImage: 'url(' + image + ')'}"></div>
          <h2 class="text-center my-3"> {{ title }} </h2>

          <div class="row">
            <div class="col-12">
              <div class="markdown-body" v-html="mdown"> </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import marked from 'marked'
  import highlight from 'highlight.js'
  import 'highlight.js/styles/magula.css';

  export default {
    computed: {
      mdown() {
           return marked(this.content, {
            highlight(md) {
            return highlight.highlightAuto(md).value
          }
        });
      }
    },
    asyncData(context) {
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

      return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postid, {
        version: version
      }).then((res) => {
        console.log(res.data);
        return {
          blok: res.data.story.content,
          title: res.data.story.content.title,
          content: res.data.story.content.longtext,
          image: res.data.story.content.image
        }

      }).catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
    },
    mounted() {
      this.$storybridge.on('change', () => {
        location.reload(true);
      });
    }
  }

</script>

<style scoped lang="scss">
  p {
    white-space: pre-line;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  .bg_image {
    height: 200px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }

  h2 {
    color: #188188;
    font-family: 'Big Shoulders Text', cursive;
  }

</style>
