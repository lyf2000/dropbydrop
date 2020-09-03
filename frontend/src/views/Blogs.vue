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


@Component({
  name: 'Blogs',
  components: {
    BlogList, 
  }
})
export default class Blogs extends Vue {
  
}

</script>
