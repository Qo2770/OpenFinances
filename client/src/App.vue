<template>
  <div id="app">
    <NavBar></NavBar>
    <!--  All pages will be injected by vue router -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/Nav/NavBar';

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {

}
</style>
