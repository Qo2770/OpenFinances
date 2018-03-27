<template>
  <div id="signup">
    <form class="md-layout" action="/signup/adduser" method="post">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Sign Up</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">

              <md-field>
                <label for="email">Email</label>
                <md-input name="email" id="email" type="email" required />
              </md-field>

              <md-field>
                <label for="username">Username</label>
                <md-input name="username" id="username" required />
              </md-field>

              <md-field>
                <label for="password">Password</label>
                <md-input name="password" id="password" type="password" required />
              </md-field>

              <md-field>
                <label for="repassword">Re-Password</label>
                <md-input name="repassword" id="repassword" type="password" required />
              </md-field>

              <div>
                <md-checkbox v-model="tos">I Agree with the Terms of Service</md-checkbox>
              </div>

              <md-card-actions>
                <md-button type="submit" class="md-accent center">Sign Up</md-button>
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
  name: 'signup',
  components: {

  },
  data: () => ({
    tos: false
  })
}
</script>

<style>
#signup {


}

.md-field::after {
  display: none;
}
</style>
