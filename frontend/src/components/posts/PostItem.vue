<template>
  <div class="post-item">

            <v-card
                raised
                
            >
    <v-list-item three-line>
      <v-list-item-content>
        
        <v-list-item-title class="headline mb-1">{{postItem.title}}</v-list-item-title>
      </v-list-item-content>

    </v-list-item>

  </v-card>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';


@Component({
  components: {
    
  }
})
export default class PostItem extends Vue {
    @Prop() postItem: any
}

</script>
