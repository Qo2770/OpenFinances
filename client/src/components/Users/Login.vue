<template>
  <div id="login">
    <form class="md-layout" action="/auth" method="post">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="username">Username</label>
                <md-input name="username" id="username" required />
              </md-field>

              <md-field>
                <label for="password">Password</label>
                <md-input name="password" id="password" type="password" required />
              </md-field>

              <md-card-actions>
                <md-button type="submit" class="md-accent center">Login</md-button>
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
  name: 'login',
  components: {

  },
  data: () => ({

  })
}
</script>

<style>
#login {


}

.md-field::after {
  display: none;
}
</style>
