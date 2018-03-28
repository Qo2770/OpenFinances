<template>
  <div id="signup">
    <form class="md-layout" action="/ads/adduser" method="post" @submit.prevent="validateUser" novalidate>
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Sign Up</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">

              <md-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
              </md-field>


              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('firstName')">
                    <label for="first-name">First Name</label>
                    <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                    <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('lastName')">
                    <label for="last-name">Last Name</label>
                    <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                    <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                  </md-field>
                </div>
              </div>

              <md-field :class="getValidationClass('username')">
                <label for="username">Username</label>
                <md-input name="username" id="username" autocomplete="username" v-model="form.username" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.username.required">A username is required</span>
                <span class="md-error" v-else-if="!$v.form.username.minlength">Invalid username</span>
              </md-field>

              <md-field :class="getValidationClass('password')">
                <label for="password">Password</label>
                <md-input name="password" id="password" type="password" v-model="form.password" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.password.required">A password is required</span>
                <span class="md-error" v-if="!$v.form.password.minLength">Password is too short</span>
              </md-field>

              <md-field :class="getValidationClass('repeatPassword')">
                <label for="repassword">Re-Password</label>
                <md-input name="repassword" id="repassword" type="password" v-model="form.repeatPassword" required :disabled="sending" @input="$v.repeatPassword.$touch()" />
                <span class="md-error" v-if="!$v.form.repeatPassword.sameAsPassword">Passwords must match</span>
              </md-field>

              <div :class="getValidationClass('tos')">
                <md-checkbox v-model="form.tos" :disabled="sending">I Agree with the Terms of Service</md-checkbox>
              </div>

              <md-progress-bar md-mode="indeterminate" v-if="sending" />

              <md-card-actions>
                <md-button type="submit" class="md-accent center" :disabled="sending">Sign Up</md-button>
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
import {
  required,
  email,
  minLength,
  sameAs
} from 'vuelidate/lib/validators'

export default {
  name: 'signup',
  mixins: [validationMixin],
  components: {

  },
  data: () => ({
    form: {
      email: null,
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      repeatPassword: null,
      tos: false
    },
    sending: false
  }),
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      },
      tos: {
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
      this.form.firstName = null
      this.form.lastName = null
      this.form.username = null
      this.form.email = null
      this.form.password = null
      this.form.repeatPassword = null
      this.form.tos = false
    },
    saveUser () {
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
        this.saveUser()
      }
    }
  }
}
</script>

<style>
#signup {


}
</style>
