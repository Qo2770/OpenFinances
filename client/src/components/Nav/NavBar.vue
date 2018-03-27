<template>
  <div id="navbar" class="page-container">
    <md-app style="height: 100vh;">
      <md-app-toolbar class="md-accent" md-elevation="1">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <router-link class="md-title center" style="text-decoration: none;" to="/">OpenFinances</router-link>
          </div>

          <md-menu md-direction="bottom-end" class="md-toolbar-section-end">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>more_vert</md-icon>
            </md-button>
            <md-menu-content>
              <md-menu-item to="/login">Login</md-menu-item>
              <md-menu-item to="/signup">Sign Up</md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>

        <div class="md-toolbar-row" style="width: 100%;" v-if="$route.params.project">
          <md-tabs class="md-transparent" md-alignment="left" style="width: 100%;">
            <md-tab id="tab-home" md-label="Dashboard" md-icon="dashboard" :to="{ name: 'projects', params: {project: $route.params.project } }"></md-tab>
            <md-tab id="tab-pages" md-label="Charts" md-icon="insert_chart" :to="{ name: 'charts', params: {project: $route.params.project } }"></md-tab>
            <md-tab id="tab-posts" md-label="Settings" md-icon="settings" :to="{ name: 'settings', params: {project: $route.params.project } }"></md-tab>
            <md-tab id="tab-favorites" md-label="Favorites" md-icon="dashboard" :to="{ name: 'dashboard', params: {project: $route.params.project } }"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-title">Projects</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item v-for="project in projects" :key="project.id" :to="{ name: 'projects', params: {project: project.id } }">
            <md-icon>arrow_right</md-icon>
            <span class="md-list-item-text">{{ project.title }}</span>
          </md-list-item>

          <md-list-item to="/addproject">
            <md-icon>add</md-icon>
            <span class="md-list-item-text">Add Project</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content style="height: 100%">
        <router-view style="height: 100%"></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  components: {

  },
  data: () => ({
    menuVisible: false,
    projects: [
      {
        title: "Finanzauschuss",
        id: "1"
      },
      {
        title: "Personal",
        id: "2"
      }
    ]
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style>
#navbar {

}
</style>
