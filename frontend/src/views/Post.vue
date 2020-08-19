<template>
   <div id="post">
      <v-textarea
        background-color="light-blue"
        v-model="text"
      ></v-textarea>
      <div>
        <markdown-it-vue class="md-body" :content="text" />
      </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'


@Component({
  components: {
      MarkdownItVue, 
  }
})
export default class Post extends Vue {
    text = '## rget'
}

</script>
