<template>
  <div class="blog-list">
    <v-row>
        <v-col
            v-for="blog in blogs" 
            :key="blog.id"
            class="col-12 col-sm-10 col-md-8"
        >
            <BlogItem 
                :blogItem="blog"
            />
             
        </v-col>
    </v-row>
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
        }
    ]
}

</script>
