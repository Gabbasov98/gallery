<template>
    <div class="container">
        <Header/>
        <router-view />
    </div>
    
</template>

<script lang="ts">
import Header from './components/Header.vue'
import All from './views/All.vue'

export default{
  name: 'Dashboard',
  components:{Header,All},
  watch: {
    $route: {
      immedite: true,
      handler(to,from){
        document.title = to.meta.title || "Галлерея картин"
      }
    }
  }
}
</script>



