<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md widthPage">
      <div class="row">
        <h1>Регистрация</h1>
      </div>
      <div class="row">
        <q-input
          dark
          color="white"
          v-model="form.email"
          type="email"
          placeholder="Логин"
          style="width: 100%;"
          :rules="[ val => !!val || 'Обязательное поле',
                    val => val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || 'Некорректный email' ]"
        ></q-input>
      </div>
      <div class="row">
        <q-input
          dark
          color="white"
          v-model="form.password"
          :type="isPwd ? 'password' : 'text'"
          placeholder="Пароль"
          style="width: 100%;"
          :rules="[ val => !!val || 'Обязательное поле',
                    val => val.length > 5 || 'Пароль должен быть больше 5 символов' ]">
          <template v-slot:append>
            <q-icon
              ref="password"
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            ></q-icon>
          </template>
        </q-input>
      </div>
      <div class="row">
        <q-input
          dark
          color="white"
          v-model="form.passwordConfirm"
          :type="isPwdConf ? 'password' : 'text'"
          placeholder="Пароль"
          style="width: 100%;"
          :rules="[ val => !!val || 'Обязательное поле',
                    val => val === form.password || 'Пароли не совпадают' ]">
          <template v-slot:append>
            <q-icon
              ref="passwordConfirm"
              :name="isPwdConf ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwdConf = !isPwdConf"
            ></q-icon>
          </template>
        </q-input>
      </div>
      <div class="row" style="margin-top: 30px; justify-content: center;">
        <q-btn
          unelevated
          rounded
          color="dark"
          label="РЕГИСТРАЦИЯ"
          style="margin: 10px;"
          @click="registration()"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        passwordConfirm: ''
      },
      isPwd: true,
      isPwdConf: true
    }
  },
  methods: {
    registration: async function () {
      if (this.form.password === this.form.passwordConfirm) {
        await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: this.form.email,
            password: this.form.password
          })
        }).then(response => {
          if (response.ok) return response.json()
        }).then(data => {
          localStorage.token = data.token
          this.$router.push('confirm')
        })
      }
    }
  },
  computed: {
    // isSame () {
    //   return {
    //     error: this.regPass !== this.confirmPass
    //   }
    // }
  }
}
</script>
