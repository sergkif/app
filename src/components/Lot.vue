<template>
    <div class="q-pa-md q-gutter-sm">
      <q-banner rounded class="bg-black text-white">
        <template v-slot:avatar>
          <img
            :src="app.icon"
            style=""
          >
        </template>
        {{app.title}}
        <br>
        <div class="size">{{app.description}}</div>
        <div v-if='app.free'> СО ВСЕМИ ВСТРОЕННЫМИ ПОКУПКАМИ </div>
        <div v-else> ОФИЦИАЛЬНАЯ ЦЕНА: {{app.price}} {{app.currency}} </div>
        <template v-slot:action>
          <q-btn
            unelevated
            rounded
            color="primary"
            label="ЗАГРУЗИТЬ"
            style=""
            @click="download"
          ></q-btn>
        </template>
      </q-banner>
    </div>
</template>

<script>
export default {
  props: ['app'],
  data () {
    return {
    }
  },
  methods: {
    async download () {
      if (localStorage.token) {
        await fetch('http://localhost:3000/users/me', {
          method: 'GET',
          headers: { 'Authorization': ('Bearer ' + localStorage.token) }
        }).then(response => {
          console.log(response)
          if (response.ok) return response.json()
        }).then(data => {
          console.log(data)
          if (data.status === 200) window.location = this.app.url
          if (data.status === 402 && data.newSubscriber) this.$router.push('confirm')
          if (data.status === 402 && !data.newSubscriber) this.$router.push('pay')
        }).catch(error => {
          console.log(error)
        })
      } else this.$router.push('login')
    }
  }
}
</script>

<style scoped>
  .size {
    white-space: nowrap; /* Отменяем перенос текста */
    overflow: hidden; /* Обрезаем содержимое */
    padding: 5px 0; /* Поля */
    text-overflow: ellipsis;
    width: 400px;
  }
</style>
