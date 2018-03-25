<template>
  <div id="navbar">
    <Projects></Projects>
    <nav class="nav-extended teal lighten-1">
      <div class="nav-wrapper">
        <router-link to="#" class="brand-logo center">OpenFinances</router-link>
        <router-link to="#" id="button-sidenav" data-activates="mobile-demo" class="button hide-on-large-only" style="float: left; margin-left: 1%;"><i class="material-icons">menu</i></router-link>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <!-- Dropdown Trigger -->
          <li><router-link class="dropdown-trigger" style="width: 200px;" to="#!" data-activates="projects-dropdown">Projects<i class="material-icons left">arrow_drop_down</i></router-link></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/signup">Sign up</router-link></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li class="hide-on-large-only"><div class="divider" style="margin: 0px 5%;"></div></li>
          <li class="hide-on-large-only"><router-link to="/login">Login</router-link></li>
          <li class="hide-on-large-only"><router-link to="/signup">Sign up</router-link></li>
        </ul>
      </div>
      <HelperTab></HelperTab>
    </nav>
  </div>
</template>

<script>
import HelperTab from './HelperTab';
import Projects from './Projects';

export default {
  name: 'navbar',
  components: {
    HelperTab, Projects
  }
}
</script>

<style>
#navbar {

}
</style>
