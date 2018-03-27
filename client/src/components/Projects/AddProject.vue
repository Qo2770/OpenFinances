<template>
  <div id="addproject">
    <form class="md-layout" action="/addproject/submit" method="post">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Add Project</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="project-name">Project Name</label>
                <md-input name="first-name" id="first-name" required />
              </md-field>

              <div>
                <md-title class="md-title">Select required features (can be changed later)</md-title><br>
                <md-checkbox v-model="features" value="cashflow">Balance / Cashflow</md-checkbox><br>
                <md-checkbox v-model="features" value="guv">Profit / Loss calculations</md-checkbox><br>
                <md-checkbox v-model="features" value="charts">Charts</md-checkbox><br>
                <md-checkbox v-model="features" value="public">Publishing</md-checkbox><br>
              </div>

              <md-card-actions>
                <md-button type="submit" class="md-primary">Create project</md-button>
              </md-card-actions>

            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>

export default {
  name: 'addproject',
  components: {

  },
  data: () => ({
    features: []
  })
}
</script>

<style>
#addproject {


}

.md-field::after {
  display: none;
}
</style>
