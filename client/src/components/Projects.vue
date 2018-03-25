<template>
  <div id="projects">
    <ul id="projects-dropdown" class="dropdown-content">
      <li class="no-padding" v-for="project in projects" :key="project.title"><a href="#">{{ project.title }} <i class="material-icons right">keyboard_arrow_right</i></a></li>
      <li>
        <div v-if="projects" class="divider" style="margin: 0px 10%;"></div>
        <a href="#"><i class="material-icons">add</i> Add Project</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'projects',
  components: {

  },
  data() {
    return {
      projects: [
        {
          title: "Finanzauschuss"
        },
        {
          title: "Personal"
        }
      ]
    }
  }
}
</script>

<style>
#projects {

}
</style>
