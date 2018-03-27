<template>
  <div id="navbar" class="page-container">
    <md-app style="height: 100vh;">
      <md-app-toolbar class="md-accent" md-elevation="1">
        <div class="md-toolbar-row">
          <!-- <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <h3 class="md-title center" style="flex: 1">OpenFinances</h3>
          <md-button class="md-small-hide">Login</md-button>
          <md-button class="md-primary md-small-hide">Sign up</md-button> -->

          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <div class="md-title center">OpenFinances</div>
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

        <div class="md-toolbar-row">
          <md-tabs class="md-transparent" md-alignment="fixed">
            <md-tab id="tab-home" md-label="Home"></md-tab>
            <md-tab id="tab-pages" md-label="Pages"></md-tab>
            <md-tab id="tab-posts" md-label="Posts"></md-tab>
            <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
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
