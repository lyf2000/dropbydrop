<template>
    <v-app-bar
      app
      color="#e3f2fd"
      dark
      absolute
    >
 
         
         <v-btn 
          to="/"
          color="#8fe7dcb2"
         >Home</v-btn>
         <v-btn 
          to="/blogs"
          class="ml-3"
          color="#8fe7dcb2"
         >Blogs</v-btn>
      <v-spacer></v-spacer>


    </v-app-bar>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'


@Component({
  name: 'Navbar',
})
export default class Navbar extends Vue {

}

</script>

<style scoped>
    body {
        background-color: aquamarine;
    }
</style>