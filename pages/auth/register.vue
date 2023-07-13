<template>
  <div class="login">
    <h1>ثبت نام</h1>
    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="form.name"
        :rules="[required]"
        type="email"
        label="نام"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.email"
        :rules="[email, required]"
        type="email"
        label="ایمیل"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        :rules="[password, required]"
        type="password"
        label="رمز عبور"
        required
      ></v-text-field>

      <v-btn elevation="0" color="primary-btn" block @click="register">
        ثبت نام
      </v-btn>
    </v-form>

    <hr />
    <nuxt-link to="/auth/login">
      <v-btn elevation="0" color="secondary-btn" block>ورود</v-btn>
    </nuxt-link>
  </div>
</template>

<script>
import { email, password, required } from '@/helpers/validation'
export default {
  layout: 'auth',

  data() {
    return {
      email,
      password,
      required,
      form: {
        email: '',
        password: '',
        name
      },
    }
  },
  methods: {
    register() {},
  },
}
</script>

<style>
input {
  border-bottom: 1px solid black;
}

hr {
  margin: 2em 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.primary-btn {
  background: linear-gradient(266.69deg, #2f2f54 0%, #242441 100%);
  color: white !important;
}

.secondary-btn {
  background: #ffffff;
  border: 3px solid #2b2b4d;
}
</style>
