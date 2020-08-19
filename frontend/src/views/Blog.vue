<template>
   <div id="blog">
     <v-row>
        <v-col
          class="col-12 col-sm-10 col-md-8"
        >
          <PostList/>
        </v-col>
     </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PostList from '@/components/posts/PostList.vue'


@Component({
  components: {
      PostList, 
  }
})
export default class Blog extends Vue {

}

</script>
