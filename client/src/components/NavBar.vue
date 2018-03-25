<template>
  <div id="navbar">
    <Projects></Projects>
    <nav class="nav-extended teal lighten-1">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">OpenFinances</a>
        <a href="#" id="button-sidenav" data-activates="mobile-demo" class="button hide-on-large-only" style="float: left; margin-left: 1%;"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <!-- Dropdown Trigger -->
          <li><a class="dropdown-trigger" style="width: 200px;" href="#!" data-activates="projects-dropdown">Projects<i class="material-icons left">arrow_drop_down</i></a></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign up</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li class="hide-on-large-only"><div class="divider" style="margin: 0px 5%;"></div></li>
          <li class="hide-on-large-only"><a href="/login">Login</a></li>
          <li class="hide-on-large-only"><a href="/signup">Sign up</a></li>
        </ul>
      </div>
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
