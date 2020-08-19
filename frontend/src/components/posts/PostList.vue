<template>
  <div class="blog-list">
    <PostItem 
        v-for="post in posts" 
        :key="post.id"
        :postItem="post"
        class="mb-3"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PostItem from '@/components/posts/PostItem.vue'


@Component({
  components: {
      PostItem, 
  }
})
export default class PostList extends Vue {
    posts = [
        {
            id: 1,
            title: 'T1'
        },
        {
            id: 2,
            title: 'T2'
        },
        {
            id: 2,
            title: 'T2'
        },
        {
            id: 2,
            title: 'T2'
        }
    ]
}

</script>
