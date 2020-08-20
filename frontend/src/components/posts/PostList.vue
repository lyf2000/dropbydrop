<template>
  <div class="post-list">
    <PostItem 
        v-for="post in postList" 
        :key="post.id"
        :postItem="post"
        class="mb-3"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PostItem from '@/components/posts/PostItem.vue'
import { loadPostList } from '@/store/api/posts'
import posts from '@/store/models/posts/posts.ts'


@Component({
  components: {
      PostItem, 
  }
})
export default class PostList extends Vue {
    created() {
    loadPostList(this.$route.params.id)
    .then((response) => posts.storePostList(response.data.posts))
    .catch((err) => console.log(err))
    } 

    get postList() {
        return posts.postList
    }
}

</script>
