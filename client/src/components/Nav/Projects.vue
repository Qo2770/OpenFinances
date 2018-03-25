<template>
  <div id="projects">
    <ul id="projects-dropdown" class="dropdown-content">
      <li class="no-padding" v-for="project in projects" :key="project.title"><router-link to="#">{{ project.title }} <i class="material-icons right">keyboard_arrow_right</i></router-link></li>
      <li>
        <div v-if="projects" class="divider" style="margin: 0px 10%;"></div>
        <router-link to="#"><i class="material-icons">add</i> Add Project</router-link>
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
