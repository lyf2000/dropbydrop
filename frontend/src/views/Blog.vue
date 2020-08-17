<template>
   <div id="blog">
    <PostList/>
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
