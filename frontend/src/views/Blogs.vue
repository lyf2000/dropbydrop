<template>
  <div id="blogs">
    <v-row>
      <v-col
        class="col-12 col-sm-10 col-md-8"
      >
        <BlogList/>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import BlogList from '@/components/blogs/BlogList.vue'
import { loadBlogList } from '@/store/api/blogs'
import blogs from '@/store/models/blogs/blogs.ts'


@Component({
  name: 'Blogs',
  components: {
    BlogList, 
  }
})
export default class Blogs extends Vue {
  created() {
    loadBlogList()
    .then((response) => blogs.storeBlogList(response.data))
    .catch((err) => console.log(err))
    
  }
}

</script>
