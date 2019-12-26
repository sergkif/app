<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md widthPage">
      <div class="row">
        <h2>Пользовательское соглашение</h2>
      </div>
      <div class="row" style="margin-top: 30px; justify-content: center;">
        Здесь будет пользовательское соглашения
      </div>
      <div class="row" style="margin-top: 30px;">
        <q-checkbox dark v-model="iRead" label="Я ознакомился с условиями пользовательского соглашения."></q-checkbox>
        <q-checkbox dark v-model="iConfirm" label="Я принимаю условия пользовательского соглашения."></q-checkbox>
      </div>
      <div class="row" style="margin-top: 30px; justify-content: center;">
        <q-btn
          unelevated
          rounded
          color="dark"
          label="ДАЛЕЕ"
          style="margin: 10px;"
          @click="confirm"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      iRead: false,
      iConfirm: false
    }
  },
  beforeCreate () {
    fetch('http://localhost:3000/users/me', {
      method: 'GET',
      headers: { 'Authorization': ('Bearer ' + localStorage.token) }
    }).then(response => {
      console.log(response)
      if (response.ok) return response.json()
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    confirm () {
      if (this.iRead && this.iConfirm) this.$router.push('pay')
    }
  }
}
</script>
