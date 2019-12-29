<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md widthPage">
      <div class="row" style="justify-content: center;">
        <iframe
          :src="qiwiURL"
          width="400"
          height="500"
          allowTransparency="true"
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
      <div class="row" style="margin-top: 30px; justify-content: center;">
        <q-btn
          unelevated
          rounded
          color="dark"
          label="ДАЛЕЕ"
          style="margin: 10px;"
          @click="isPayed"
        ></q-btn>
      </div>
    </div>
    <q-spinner-hourglass v-if="loading" color="blue-grey" style="position: absolute; top: 45%; left: 45%; z-index: 100; width: 10%; height: 10%;"></q-spinner-hourglass>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      qiwiURL: '',
      loading: false
    }
  },
  methods: {
    pay: async function () {
      this.loading = true
      await fetch('http://localhost:3000/payments/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + localStorage.token) }
      }).then(response => {
        console.log(response)
        if (response.ok) return response.json()
      }).then(data => {
        this.loading = false
        console.log(data)
        this.qiwiURL = data.link
      }).catch(err => {
        this.loading = false
        console.log(err)
      })
    },
    async isPayed () {
      this.loading = true
      if (localStorage.token) {
        await fetch('http://localhost:3000/users/me', {
          method: 'GET',
          headers: { 'Authorization': ('Bearer ' + localStorage.token) }
        }).then(response => {
          if (response.ok) return response.json()
        }).then(data => {
          console.log(data)
          if (data.status === 200) {
            this.loading = false
            this.$router.push('payed')
          } else this.loading = false
        }).catch(error => {
          this.loading = false
          console.log(error)
        })
      } else {
        this.loading = false
        this.$router.push('login')
      }
    }
  },
  mounted () {
    this.pay()
  }
}
</script>
