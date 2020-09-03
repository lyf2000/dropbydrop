<template>
  <v-app>
      <Navbar/>
    <v-main style="backgroundColor: #e8faed; ">
      <v-container>
          <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue'

@Component({
  components: {
    Navbar,
  }
})
export default class App extends Vue {
  
}

</script>
