<template>
  <div class="blog-list">
    <v-row>
        <v-col
            v-for="post in posts" 
            :key="post.id"
            class="col-12 col-sm-10 col-md-8"
        >
            <PostItem 
                :postItem="post"
            />
             
        </v-col>
    </v-row>
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
