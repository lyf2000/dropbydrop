<template>
   <div id="post">
     <v-row>
        <v-col
          class="col-12 col-sm-10 col-md-8"
        >
          <div v-if="!post">
                LOADING
          </div>
          <markdown-it-vue v-else class="md-body" :content="post.text" />
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
