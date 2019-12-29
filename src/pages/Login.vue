<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md widthPage">
      <div class="row">
        <h1>Вход</h1>
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
                    val => val.length > 6 || 'Пароль должен быть больше 6 символов' ]">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            ></q-icon>
          </template>
        </q-input>
      </div>
      <div class="row" style="margin-top: 30px; justify-content: center;">
        <q-btn
          unelevated
          rounded
          color="dark"
          label="ЛОГИН"
          style="margin: 10px;"
          @click="login"
        ></q-btn>
        <q-btn
          unelevated
          rounded
          color="dark"
          label="РЕГИСТРАЦИЯ"
          style="margin: 10px;"
          :to="{ path: '/registration' }"
        ></q-btn>
      </div>
    </div>
    <Error v-if="error" :errorDescription="errorDescription" :errorRedirect='errorRedirect'></Error>
    <q-spinner-hourglass v-if="loading" color="blue-grey" style="position: absolute; top: 45%; left: 45%; z-index: 100; width: 10%; height: 10%;"></q-spinner-hourglass>
  </q-page>
</template>

<script>
import Error from '../components/Error'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      isPwd: true,
      loading: false,
      error: false,
      errorDescription: 'Произошла непредвиденная ошибка: ',
      errorRedirect: ''
    }
  },
  components: {
    Error
  },
  methods: {
    login: async function () {
      this.loading = true
      await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.form.email,
          password: this.form.password
        })
      }).then(response => {
        if (response.ok) return response.json()
        // if (response.status === 401) {
        //   throw new Error('Unauthorized')
        // }
      }).then(data => {
        if (data) {
          console.log(data)
          this.loading = false
          localStorage.token = data.token
          if (data.isSub) this.$router.push('/')
          else this.$router.push('confirm')
        }
      }).catch(err => {
        console.log(err)
        this.error = true
        this.errorDescription += err
        this.errorRedirect = '/'
      })
    }
  }
}
</script>
