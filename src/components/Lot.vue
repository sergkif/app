<template>
    <div class="q-pa-md q-gutter-sm w-100">
      <q-banner rounded class="bg-black text-white">
        <template v-slot:avatar>
          <img
            :src="app.icon"
            style=""
          >
        </template>
        <div style="font-size: 20px;">{{app.title}}</div>
        <br>
        <div class="size size_overflow" @click="myToggle">{{app.description}}</div>
        <div class="bottomFlex">
          <q-btn
            unelevated
            rounded
            color="primary"
            label="ЗАГРУЗИТЬ"
            style=""
            @click="download"
          ></q-btn>
          <div v-if='app.free'> СО ВСЕМИ ВСТРОЕННЫМИ ПОКУПКАМИ </div>
          <div class="fontPrice" v-else> ОФИЦИАЛЬНАЯ ЦЕНА: {{app.price}} {{app.currency}} </div>
        </div>
        <template v-slot:action>
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
    },
    myToggle () {
      this.$el.querySelector('.size').classList.toggle('size_overflow')
    }
  }
}
</script>

<style scoped>
  .size {
    padding: 5px 0;
    width: 100%;
    /* font-size: 12px; */
    color: rgb(90, 90, 90);
  }
  .size_overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .w-100 {
    width: 100%;
  }
  .bottomFlex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
  }
  .fontPrice {
    color: rgb(90, 90, 90);
    font-size: 10px;
  }
</style>
