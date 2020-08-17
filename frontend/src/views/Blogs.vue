<template>
  <div id="blogs">
    <BlogList/>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import BlogList from '@/components/blogs/BlogList.vue'


@Component({
  name: 'Blogs',
  components: {
    BlogList, 
  }
})
export default class Blogs extends Vue {

}

</script>
