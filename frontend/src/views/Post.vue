<template>
   <div id="post">
     <v-row>
        <v-col
          class="col-12 col-sm-10 col-md-8"
        >
          <div v-if="!post">
                LOADING
          </div>
          <div v-else >
            <h1 class="my-4">{{ post.title }}</h1>

            <hr>

            <markdown-it-vue  class="md-body my-5" :content="post.text" />
   
            <hr>

            <p class="text-right h6 font-weight-light font-italic mb-5">created {{ post.created }}</p>
          </div>
        </v-col>
    </v-row>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import { loadPost } from '@/store/api/posts'
import posts from '@/store/models/posts/posts.ts'


@Component({
  components: {
      MarkdownItVue, 
  }
})
export default class Post extends Vue {
    
    created() {
        loadPost(this.$route.params.id)
        .then((response) => posts.storePost(response.data))
        .catch((err) => console.log(err))
    } 


    get post() {
        return posts.post
    }

}

</script>
