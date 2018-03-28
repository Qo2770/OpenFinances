<template>
  <div id="login">
    <form class="md-layout" action="/auth" method="post" @submit.prevent="validateUser" novalidate>
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('username')">
                <label for="username">Username</label>
                <md-input name="username" id="username" autocomplete="username" v-model="form.username" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.username.required">Please enter your username</span>
              </md-field>

              <md-field :class="getValidationClass('password')">
                <label for="password">Password</label>
                <md-input name="password" id="password" type="password" v-model="form.password" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.password.required">Please enter you password</span>
              </md-field>

              <div>
                <md-checkbox v-model="form.rememberMe" :disabled="sending">Remember Me</md-checkbox>
              </div>

              <div class="md-error red right" style="color: red;" v-if="invalid"><small>Invalid username or password!</small></div>

              <md-progress-bar md-mode="indeterminate" v-if="sending" />

              <md-card-actions>
                <md-button type="submit" class="md-accent center" :disabled="sending">Login</md-button>
              </md-card-actions>

            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  mixins: [validationMixin],
  components: {

  },
  data: () => ({
    form: {
      username: null,
      password: null,
      rememberMe: false
    },
    sending: false,
    invalid: false
  }),
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.username = null
      this.form.password = null
      this.form.rememberMe = false
    },
    authUser () {
      this.sending = true

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`
        this.sending = false
        this.clearForm()
      }, 1500)
    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.authUser()
      }
    }
  }
}
</script>

<style>
#login {


}
</style>
