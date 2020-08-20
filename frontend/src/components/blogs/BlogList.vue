<template>
  <div class="blog-list">
    
        <BlogItem
            v-for="blog in blogList" 
            :key="blog.id"
            :blogItem="blog"
            class="mb-3"
        />
             
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BlogItem from '@/components/blogs/BlogItem.vue'
import { loadBlogList } from '@/store/api/blogs'
import blogs from '@/store/models/blogs/blogs.ts'


@Component({
  components: {
      BlogItem, 
  }
})
export default class BlogList extends Vue {
    created() {
    loadBlogList()
    .then((response) => blogs.storeBlogList(response.data))
    .catch((err) => console.log(err))
    } 

    get blogList() {
        return blogs.blogList
    }
}

</script>
