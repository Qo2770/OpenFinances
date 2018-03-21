<template>
  <div id="navbar">
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">OpenFinances</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
      <HelperTab></HelperTab>
    </nav>
    <div id="test1" class="col s12">Test 1</div>
    <div id="test2" class="col s12">Test 2</div>
    <div id="test3" class="col s12">Test 3</div>
    <div id="test4" class="col s12">Test 4</div>
  </div>
</template>

<script>
import HelperTab from './HelperTab';

export default {
  name: 'navbar',
  components: {
    HelperTab
  }
}
</script>

<style>
#navbar {

}
</style>
