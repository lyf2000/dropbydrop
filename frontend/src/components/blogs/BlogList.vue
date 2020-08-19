<template>
  <div class="blog-list">
    
        <BlogItem
            v-for="blog in blogs" 
            :key="blog.id"
            :blogItem="blog"
            class="mb-3"
        />
             
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BlogItem from '@/components/blogs/BlogItem.vue'


@Component({
  components: {
      BlogItem, 
  }
})
export default class BlogList extends Vue {
    blogs = [
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
