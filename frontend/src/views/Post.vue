<template>
   <div id="post">
     <v-row>
        <v-col
          class="col-12 col-sm-10 col-md-8"
        >
          <markdown-it-vue class="md-body" :content="text" />
        </v-col>
    </v-row>
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
    text = `## rget

> ewgfdb
> rgbdfbfgrgkobdpfobkdpfbkpdofkbpodbkdpfgobkpfgokbpfgobkpfgobnkfgponkpfgonkpfgonkfgsgvdfpobkdpfobkdpfgobkpfgobkpoponkpfg`
}

</script>
