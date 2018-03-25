<template>
  <div id="helpertab">
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab" v-for="tab in tabs"><a :href="tab.link">{{ tab.title }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'helpertab',
  components: {

  },
  data() {
    return {
      tabs: [
      {
        title: "Overview",
        link: "#"
      },
      {
        title: "Edit",
        link: "#"
      },
      {
        title: "Settings",
        link: "#"
      },
      {
        title: "Profile",
        link: "#"
      }]
    }
  }
}
</script>

<style>
#helpertab {

}
</style>
