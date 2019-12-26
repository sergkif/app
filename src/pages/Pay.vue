<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md widthPage">
      <div class="row" style="justify-content: center;">
        Здесь будет окно оплаты
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
  </q-page>
</template>

<script>
export default {
  methods: {
    pay: async function () {
      await fetch('http://localhost:3000/payments/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.$user.email,
          session: this.$user.sessionId
        })
      }).then(response => {
        console.log(this.$user.sessionId)
        console.log(response)
        if (response.ok) return response.json()
      }).then(data => {
        console.log(data)
      })
    },
    isPayed () {
    }
  },
  beforeCreate () {
    this.pay()
  }
}
</script>
